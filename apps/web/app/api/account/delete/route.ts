import { NextResponse } from "next/server"

export const runtime = 'nodejs'
import { getSupabaseAdminClient, getSupabaseServerClientWithAuth } from "@/lib/supabase"

export async function POST(req: Request) {
  try {
    if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json(
        { error: "当前环境未启用账户删除功能，缺少 SUPABASE_SERVICE_ROLE_KEY。" },
        { status: 501 }
      )
    }

    const authHeader = req.headers.get("authorization") || req.headers.get("Authorization")
    if (!authHeader?.toLowerCase().startsWith("bearer ")) {
      return NextResponse.json({ error: "缺少 Authorization Bearer 令牌" }, { status: 401 })
    }
    const token = authHeader.split(" ")[1]

    const userClient = getSupabaseServerClientWithAuth(token)
    const { data: userData, error: userErr } = await userClient.auth.getUser()
    if (userErr || !userData.user) {
      return NextResponse.json({ error: "会话无效或已过期" }, { status: 401 })
    }

    const userId = userData.user.id

    const admin = getSupabaseAdminClient()
    const { error: delErr } = await admin.auth.admin.deleteUser(userId)
    if (delErr) {
      return NextResponse.json({ error: delErr.message || "删除用户失败" }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "服务器发生意外错误" }, { status: 500 })
  }
}

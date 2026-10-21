"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock } from "lucide-react"
import Link from "next/link"
import { AUTH_ENABLED, getSupabaseBrowserClient } from "@/lib/supabase"

export default function ResetPasswordPage() {
  const supabase = getSupabaseBrowserClient()
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [msg, setMsg] = useState<string | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!AUTH_ENABLED) return
    supabase.auth.getUser().then(({ data }) => {
      setReady(!!data.user)
    })
  }, [supabase])

  async function handleUpdate() {
    setError(null)
    setMsg(null)
    if (password.length < 8) {
      setError("Password must be at least 8 characters")
      return
    }
    if (password !== confirm) {
      setError("Passwords do not match")
      return
    }
    setLoading(true)
    try {
      const { error } = await supabase.auth.updateUser({ password })
      if (error) throw error
      setMsg("Password updated. You can now continue to the app.")
    } catch (e: any) {
      setError(e.message ?? "Failed to update password")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <Card className="border-border/80 shadow-none">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl font-bold">设置新密码</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              {!AUTH_ENABLED ? (
                <p className="text-sm text-muted-foreground">此环境未配置身份验证，无法重置密码。</p>
              ) : !ready ? (
                <p className="text-sm text-muted-foreground">
                  正在验证重置链接…
                </p>
              ) : null}

              {AUTH_ENABLED && ready && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">新密码</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="new-password"
                        type="password"
                        placeholder="设置新密码"
                        className="pl-9"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">确认密码</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="confirm-password"
                        type="password"
                        placeholder="再次输入密码"
                        className="pl-9"
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                      />
                    </div>
                  </div>

                  {error && <p className="text-sm text-red-500">{error}</p>}
                  {msg && <p className="text-sm text-green-600">{msg}</p>}

                  <Button disabled={loading} onClick={handleUpdate} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    {loading ? "Updating..." : "Update password"}
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    <Link href="/signin" className="text-accent hover:underline font-medium">返回登录</Link>
                  </p>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


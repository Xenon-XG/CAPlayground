import { NextResponse } from "next/server"
import { App } from "octokit"

export const runtime = 'nodejs'

export async function GET() {
    const appId = process.env.GITHUB_APP_ID
    const privateKey = process.env.GITHUB_APP_PRIVATE_KEY
    const installationId = process.env.GITHUB_INSTALLATION_ID

    if (!appId || !privateKey || !installationId) {
        return NextResponse.json({ error: "缺少 GitHub App 配置" }, { status: 500 })
    }

    try {
        const app = new App({
            appId,
            privateKey: privateKey.replace(/\\n/g, '\n'),
        })

        const octokit = await app.getInstallationOctokit(parseInt(installationId))
        const auth: any = await octokit.auth({ type: "installation" })

        return NextResponse.json({ token: auth.token })
    } catch (error: any) {
        console.error("生成令牌失败:", error)
        return NextResponse.json({ error: "生成令牌失败" }, { status: 500 })
    }
}


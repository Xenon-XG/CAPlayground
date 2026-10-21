"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { ArrowLeft, Sun, Moon } from "lucide-react"

export default function PrivacyPage() {
  const { theme, setTheme } = useTheme()
  
  useEffect(() => {
    document.title = "CAPlayground - 隐私政策";
  }, []);

  return (
    <main className="relative min-h-screen px-4 py-10 sm:py-16 bg-gradient-to-b from-muted/40 to-transparent">
      {/* back */}
      <div className="absolute left-4 top-4">
        <Link href="/">
          <Button variant="ghost" size="sm" className="h-8 px-2">
            <ArrowLeft className="h-4 w-4 mr-1" /> 返回
          </Button>
        </Link>
      </div>

      {/* theme */}
      <div className="absolute right-4 top-4">
        <Button
          variant="ghost"
          size="icon"
          aria-label="切换主题"
          className="rounded-full h-9 w-9 p-0"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>

      <div className="mx-auto max-w-3xl">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">隐私政策</h1>
          <p className="mt-2 text-sm text-muted-foreground">上次更新：2025 年 10 月 20 日</p>
        </div>

        {/* Paper container */}
        <div className="rounded-2xl bg-card text-card-foreground shadow-lg ring-1 ring-black/5 border border-border p-6 sm:p-10 text-base sm:text-lg">
          <p className="mt-0 leading-7">
            本隐私政策说明 CAPlayground（以下简称“我们”）如何收集、使用和保护你的信息，适用于你使用 CAPlayground 网站和应用（以下简称“服务”）的情形。
          </p>

          <h2 className="mt-12 text-3xl md:text-4xl font-semibold">1. 我们收集的信息</h2>
          <ul className="mt-6 list-disc pl-6 space-y-3">
            <li>
              <strong>本机项目</strong>：默认情况下，你的项目存储在设备本地（使用浏览器 IndexedDB 或 OPFS）。除非你明确上传或分享，否则我们不会接收你的本机项目。
            </li>
            <li>
              <strong>云端项目（可选）</strong>：登录 Google Drive 后，你可以选择使用云端项目。项目文件存储在你自己的 Google Drive 账户中，而非 CAPlayground 服务器。我们不会接收、存储或访问你的云端项目；所有数据均在你的浏览器与 Google Drive 之间直接传输。
            </li>
            <li>
              <strong>账户信息</strong>：如果你通过 Supabase 使用邮箱和密码或 Google OAuth 创建账户，我们会处理你的邮箱、必要的身份验证标识（例如登录服务提供方和用户 ID），以及运行服务所需的可选个人资料信息。
            </li>
            <li>
              <strong>设备与使用情况</strong>：运行服务所需的基本技术信息，例如设备及浏览器类型和交互信息。除非在此说明，否则我们不会使用第三方分析服务。
            </li>
            <li>
              <strong>Cookie 与本地存储</strong>：我们使用必要的 Cookie 和 localStorage 保存会话、偏好及产品功能状态（例如首次接受条款的记录 <code>caplayground-tos-accepted</code>）。如果你登录 Google Drive，我们会在安全的 httpOnly Cookie 中存储身份验证令牌（<code>google_drive_access_token</code>、<code>google_drive_refresh_token</code>、<code>google_drive_token_expiry</code>），以维持 Drive 会话并代表你验证 API 请求。
            </li>
          </ul>

          <h2 className="mt-12 text-3xl md:text-4xl font-semibold">2. 我们如何使用信息</h2>
          <ul className="mt-6 list-disc pl-6 space-y-3">
            <li>提供和改进服务及其功能。</li>
            <li>验证用户身份并保护账户安全。</li>
            <li>防止滥用并保障服务可靠性。</li>
            <li>向你告知与账户或服务有关的重要更新。</li>
          </ul>

          <h2 className="mt-12 text-3xl md:text-4xl font-semibold">3. 数据分析</h2>
          <p className="mt-6 leading-7">
            我们使用注重隐私的数据分析来了解使用情况并改进 CAPlayground，包括：
          </p>
          <ul className="mt-4 list-disc pl-6 space-y-3">
            <li>
              <strong>页面访问</strong>：页面 URL、标题、来源页面、时间戳和会话 ID。
            </li>
            <li>
              <strong>会话</strong>：会话时长、开始与结束时间、访问页面数量和基本跳出情况。
            </li>
            <li>
              <strong>性能</strong>：页面加载时间、DOM 内容加载时间、首次绘制和首次内容绘制时间，以及资源加载耗时。
            </li>
            <li>
              <strong>汇总计数</strong>：我们还对部分产品事件（例如创建项目）进行汇总计数。这些计数不含用户标识，仅用于产品规划；我们不会收集项目内容。
            </li>
          </ul>
          <p className="mt-4 text-muted-foreground">
            我们不会将分析数据用于广告，也不会有意为分析目的收集精确位置或设备指纹等敏感标识。
          </p>

          <h2 className="mt-12 text-3xl md:text-4xl font-semibold">4. 第三方服务</h2>
          <p className="mt-6 leading-7">
            我们使用 Supabase 提供身份验证和后端基础设施。Supabase 可能处理提供这些服务所需的数据，并保存运行日志（例如身份验证事件）。我们还使用 PostHog 提供上述注重隐私的数据分析；PostHog 数据经由我们自己的域名代理以提高可靠性。详情请参阅各服务提供方的文档和政策。
          </p>
          <p className="mt-4 leading-7">
            <strong>Google Drive（可选）</strong>：如果你使用云端项目，我们会通过 Google Drive 存储项目文件。文件位于你自己的 Google Drive 账户中名为“CAPlayground”的文件夹；我们只访问 CAPlayground 创建的文件。你使用 Google Drive 时须遵守 <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">Google 隐私政策</a>。你可以随时通过 Google 账户设置撤销 CAPlayground 对 Drive 的访问权限。
          </p>

          <h2 className="mt-12 text-3xl md:text-4xl font-semibold">5. 数据保留</h2>
          <ul className="mt-6 list-disc pl-6 space-y-3">
            <li>本机项目保留在你的设备上，直到你将其删除。</li>
            <li>云端项目保留在你的 Google Drive 中，直到你将其删除。删除 CAPlayground 账户不会自动删除 Google Drive 中的云端项目。你需要使用控制台的“全部删除”功能，或直接在 Google Drive 中手动删除。</li>
            <li>账户有效期间，我们会保留账户数据。如果你删除账户，我们会删除相关账户数据，但法律要求保留的情况除外。</li>
            <li>退出 Google Drive 或身份验证 Cookie 过期时，这些 Cookie 会被清除。</li>
          </ul>

          <h2 className="mt-12 text-3xl md:text-4xl font-semibold">6. 你的权利</h2>
          <p className="mt-6 leading-7">
            根据你所在地区的规定，你可能享有访问、更正或删除数据的权利。我们计划在应用中提供账户删除入口。你也可以联系我们行使相关权利。
          </p>

          <h2 className="mt-12 text-3xl md:text-4xl font-semibold">7. 儿童隐私</h2>
          <p className="mt-6 leading-7">
            本服务不面向未达到服务条款规定年龄的儿童。如果你认为有儿童向我们提供了个人数据，请联系我们，我们会采取适当措施。
          </p>

          <h2 className="mt-12 text-3xl md:text-4xl font-semibold">8. 国际数据传输</h2>
          <p className="mt-6 leading-7">
            数据可能在服务提供方运营的地区处理。我们会采取措施，确保依据适用法律提供适当保护。
          </p>

          <h2 className="mt-12 text-3xl md:text-4xl font-semibold">9. 本政策的变更</h2>
          <p className="mt-6 leading-7">
            我们可能不时更新本隐私政策，届时将更新上方的“上次更新”日期，并在适当情况下另行通知。
          </p>

          <h2 className="mt-12 text-3xl md:text-4xl font-semibold">10. 联系我们</h2>
          <p className="mt-6 leading-7">
            如有疑问，请通过以下邮箱联系我们：<a className="underline" href="mailto:support@enkei64.xyz">support@enkei64.xyz</a>.
          </p>

          <p className="mt-10 text-sm text-muted-foreground">
            另请参阅我们的{" "}
            <Link href="/tos" className="underline">服务条款</Link>.
          </p>
        </div>
      </div>
    </main>
  )
}

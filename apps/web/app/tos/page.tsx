"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { ArrowLeft, Sun, Moon } from "lucide-react"

export default function TermsPage() {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    document.title = "CAPlayground - 服务条款";
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
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">服务条款</h1>
          <p className="mt-2 text-sm text-muted-foreground">上次更新：2025 年 12 月 9 日</p>
        </div>
        {/* Paper container */}
        <div className="rounded-2xl bg-card text-card-foreground shadow-lg ring-1 ring-black/5 border border-border p-6 sm:p-10 text-base sm:text-lg">
          <p className="mt-0 leading-7">
            本服务条款（以下简称“条款”）适用于你访问和使用 CAPlayground 的行为。使用本服务即表示你同意本条款。
          </p>

          <h2 className="mt-10 text-2xl md:text-3xl font-semibold">1. 定义</h2>
          <ul className="mt-4 list-disc pl-6 space-y-2">
          <li><strong>服务</strong>：CAPlayground 应用及网站。</li>
          <li><strong>本机项目</strong>：在浏览器或设备本地创建并存储的项目。</li>
          <li><strong>云端项目</strong>：在你的 Google 账户的 Google Drive 中创建并存储的项目。</li>
          <li><strong>账户</strong>：由 Supabase 支持、用于身份验证及账户功能的账户。</li>
          <li><strong>用户内容</strong>：你在使用服务时创建或上传的内容。</li>
          </ul>

          <h2 className="mt-12 text-3xl md:text-4xl font-semibold">2. 范围与适用情况</h2>
          <p className="mt-6 leading-8">
          部分条款适用于所有服务使用者（一般条款）；其他条款仅适用于创建或使用账户的用户（账户条款）。
          </p>

          <h2 className="mt-12 text-3xl md:text-4xl font-semibold">3. 一般条款（适用于所有用户）</h2>
          <ul className="mt-6 list-disc pl-6 space-y-3">
          <li>
            <strong>合理使用</strong>：不得滥用服务或干扰他人使用；不得试图访问非公开区域或破坏服务。
          </li>
          <li>
            <strong>知识产权</strong>：我们保留对服务的所有权利；你保留对自己用户内容的权利。
          </li>
          <li>
            <strong>内容分享与署名</strong>：如果你在社交平台（包括但不限于 TikTok、Instagram、YouTube、Twitter/X）分享使用 CAPlayground 创作的壁纸或内容，必须明确注明 CAPlayground。可接受的方式包括：(a) 在帖子说明、个人简介或置顶评论中添加 caplayground.vercel.app 的链接；或 (b) 在内容中清晰标注“CAPlayground”。不得误导观众对壁纸来源的认识，也不得以欺诈性说明、诈骗网站或误导性做法取代正确署名。
          </li>
          <li>
            <strong>禁止行为</strong>：不得将使用 CAPlayground 创作的内容用于：(a) 欺骗或诈骗用户；(b) 宣传骗局或误导性说明；(c) 谎称自己创建了本服务或其功能；或 (d) 损害 CAPlayground 声誉或误导公众认识本服务的任何活动。
          </li>
          <li>
            <strong>项目</strong>：默认情况下，项目使用浏览器 IndexedDB 或 OPFS 存储在你的设备本地；我们不会接收你的本机项目。你也可以登录 CAPlayground 账户并连接 Google Drive，选择使用云端项目，以便跨设备安全存储和同步。CAPlayground 不会接收或存储你的云端项目；访问和存储遵循 Google Drive 的政策。
          </li>
          <li>
            <strong>云端项目</strong>：通过 Google Drive 云存储，你可以跨设备同步项目。我们不保证云端项目的数据可用性或可靠性；你有责任备份重要项目。使用云端项目时须遵守 Google 服务条款。
          </li>
          <li>
            <strong>Google Drive 集成</strong>：登录 Google Drive 即表示你授权 CAPlayground 访问其在你 Drive 中创建的文件。我们使用浏览器 Cookie 维持 Drive 会话。你可以随时通过 Google 账户设置或在控制台退出 Google Drive 来撤销访问权限。
          </li>
          <li>
            <strong>不提供保证</strong>：服务按“现状”和“可用情况”提供。在法律允许的范围内，我们不作任何保证。
          </li>
          <li>
            <strong>责任限制</strong>：在法律允许的范围内，我们不对间接、附带或后果性损害承担责任。
          </li>
          <li>
            <strong>服务变更</strong>：我们可以随时更改或停止提供功能。
          </li>
          </ul>

          <h2 className="mt-12 text-3xl md:text-4xl font-semibold">4. 账户条款（适用于登录用户）</h2>
          <ul className="mt-6 list-disc pl-6 space-y-3">
          <li>
            <strong>使用资格</strong>：你必须年满 13 周岁，或达到所在国家或地区的最低数字服务同意年龄。
          </li>
          <li>
            <strong>账户信息</strong>：账户由 Supabase 提供。为保障安全和运行账户功能，我们可能收集和处理你的邮箱、用户名（如果设置）及登录活动。
          </li>
          <li>
            <strong>安全</strong>：请妥善保管登录凭据。你应对账户下的活动负责。
          </li>
          <li>
            <strong>账户终止</strong>：你可以随时删除账户。对于违反本条款的账户，我们可能暂停或终止其使用。请注意：删除 CAPlayground 账户不会自动删除 Google Drive 中的云端项目。删除账户前，你必须在 Drive 中手动删除，或使用控制台的“全部删除”功能。
          </li>
          </ul>

          <h2 className="mt-10 text-2xl md:text-3xl font-semibold">5. 隐私与数据</h2>
          <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>
            <strong>本地处理</strong>：除非你明确上传或分享，本机项目始终保留在你的设备上。
          </li>
          <li>
            <strong>账户数据</strong>：如果你创建账户，我们通过 Supabase 处理身份验证和个人资料功能所需的最少数据（邮箱、可选用户名）。
          </li>
          <li>
            <strong>运行日志</strong>：后端服务提供方 Supabase 会保存身份验证事件、边缘网络、API 和数据库等运行日志，以运营并保护平台。详情请参阅 Supabase 文档。
          </li>
          <li>
            <strong>仅汇总的分析数据</strong>：我们汇总统计某些产品事件（例如创建项目）以了解使用情况。这些计数不包含用户标识，也不用于广告。
          </li>
          <li>
            <strong>数据分析（PostHog）</strong>：我们使用注重隐私的分析工具统计页面访问（URL、标题、来源页面、时间戳、会话 ID）、会话（时长、开始和结束时间、访问页面数、基本跳出情况）和性能指标（页面加载、DOM 内容加载、首次绘制和首次内容绘制、资源加载耗时）。分析数据经由我们自己的域名代理。
          </li>
          <li>
            <strong>云端项目数据</strong>：使用云端项目时，项目文件存储在你自己的 Google Drive 账户中，而非 CAPlayground 服务器。我们不会接收、存储或访问云端项目；所有数据均在你的浏览器与 Google Drive 之间直接传输。
          </li>
          <li>
            <strong>Google Drive Cookie</strong>：登录 Google Drive 后，我们将身份验证令牌存储在浏览器 Cookie（httpOnly、安全）中，以维持会话。这些 Cookie 仅用于代表你验证发送至 Google Drive 的 API 请求。
          </li>
          </ul>

          <h2 className="mt-10 text-2xl md:text-3xl font-semibold">6. 第三方服务</h2>
          <p className="mt-3 leading-7">
          我们使用 Supabase 提供身份验证和后端基础设施。你使用相关功能时可能还须遵守 Supabase 的政策。
          </p>
          <p className="mt-3 leading-7">
          如果你使用云端项目，我们会通过 Google Drive 将项目文件存储在你自己的 Google Drive 账户中。你使用 Google Drive 时须遵守 Google 服务条款和隐私政策。CAPlayground 仅访问其在你的 Drive 中“CAPlayground”文件夹内创建的文件。你需要自行承担 Google Drive 存储容量限制并遵守 Google 的条款。
          </p>

          <h2 className="mt-10 text-2xl md:text-3xl font-semibold">7. 违规处理</h2>
          <p className="mt-3 leading-7">
          我们保留调查违反本条款行为的权利，包括滥用通过 CAPlayground 创作的内容。如果我们认定你违反“内容分享与署名”或“禁止行为”条款，我们可能：(a) 暂停或终止你的账户；(b) 要求社交平台移除侵权内容；(c) 在适用情况下寻求法律救济；或 (d) 公开指出参与欺诈或误导行为的账户。我们也可能向相关平台和主管机关举报诈骗及欺诈活动。
          </p>

          <h2 className="mt-10 text-2xl md:text-3xl font-semibold">8. 条款变更</h2>
          <p className="mt-3 leading-7">
          我们可能不时更新本条款，届时将更新上方的“上次更新”日期，并以合理方式告知重大变更。
          </p>

          <h2 className="mt-10 text-2xl md:text-3xl font-semibold">9. 联系我们</h2>
          <p className="mt-3 leading-7">
            如有疑问，请通过以下邮箱联系我们：<a className="underline" href="mailto:support@enkei64.xyz">support@enkei64.xyz</a>.
          </p>

          <p className="mt-10 text-sm text-muted-foreground">
            另请参阅我们的{" "}
            <Link href="/privacy" className="underline">隐私政策</Link>.
          </p>
        </div>
      </div>
    </main>
  )
}

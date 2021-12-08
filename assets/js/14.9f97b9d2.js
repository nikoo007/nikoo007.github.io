(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1073:function(t,s,a){"use strict";a.r(s);var v=a(54),_=Object(v.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"git-day01"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git-day01"}},[t._v("#")]),t._v(" Git - day01")]),t._v(" "),v("ul",[v("li",[t._v("了解版本控制软件的作用")]),t._v(" "),v("li",[t._v("了解版本控制系统的分类")]),t._v(" "),v("li",[t._v("Git 的特性")]),t._v(" "),v("li",[t._v("初始化 Git 仓库的命令")]),t._v(" "),v("li",[t._v("查看文件状态的命令")]),t._v(" "),v("li",[t._v("一次性将文件加入暂存区的命令")]),t._v(" "),v("li",[t._v("将暂存区的文件提交到 Git 仓库的命令")])]),t._v(" "),v("h1",{attrs:{id:"起步"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#起步"}},[t._v("#")]),t._v(" 起步")]),t._v(" "),v("h2",{attrs:{id:"文件的版本"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#文件的版本"}},[t._v("#")]),t._v(" 文件的版本")]),t._v(" "),v("p",[v("img",{attrs:{src:a(496),alt:""}})]),t._v(" "),v("h2",{attrs:{id:"版本控制软件-⭐⭐⭐"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#版本控制软件-⭐⭐⭐"}},[t._v("#")]),t._v(" 版本控制软件(⭐⭐⭐)")]),t._v(" "),v("h2",{attrs:{id:"概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),v("p",[v("strong",[t._v("版本控制软件")]),t._v("是一个用来记录文件变化，以便将来查阅特定")]),t._v(" "),v("p",[t._v("版本修订情况的系统，因此有时也叫做“"),v("strong",[t._v("版本控制系统")]),t._v("”")]),t._v(" "),v("h2",{attrs:{id:"通俗的理解"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#通俗的理解"}},[t._v("#")]),t._v(" 通俗的理解")]),t._v(" "),v("p",[t._v("把"),v("strong",[t._v("手工管理")]),t._v("文件版本的方式，改为由"),v("strong",[t._v("软件管理")]),t._v("文件的版本；")]),t._v(" "),v("p",[t._v("这个"),v("strong",[t._v("负责管理文件版本的软件")]),t._v("，叫做“版本控制软件”")]),t._v(" "),v("h2",{attrs:{id:"使用版本控制软件的好处"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用版本控制软件的好处"}},[t._v("#")]),t._v(" 使用版本控制软件的好处")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("操作简便："),v("strong",[t._v("只需")]),t._v("识记几组简单的终端命令")]),t._v("，即可快速上手常见的版本控制软件")]),t._v(" "),v("li",[t._v("**易于对比：**基于版本控制软件提供的功能，能够方便地比较文件的变化细节，从而查找出导致问题的原因")]),t._v(" "),v("li",[t._v("**易于回溯：**可以将选定的文件回溯到之前的状态，甚至将整个项目都回退到过去某个时间点的状态")]),t._v(" "),v("li",[t._v("**不易丢失：**在版本控制软件中，被用户误删除的文件，可以轻松的恢复回来")]),t._v(" "),v("li",[t._v("**协作方便：**基于版本控制软件提供的分支功能，可以轻松实现多人协作开发时的代码合并操作")])]),t._v(" "),v("h2",{attrs:{id:"版本控制系统的分类-⭐⭐⭐"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#版本控制系统的分类-⭐⭐⭐"}},[t._v("#")]),t._v(" 版本控制系统的分类(⭐⭐⭐)")]),t._v(" "),v("h2",{attrs:{id:"本地版本控制系统"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#本地版本控制系统"}},[t._v("#")]),t._v(" 本地版本控制系统")]),t._v(" "),v("p",[v("strong",[t._v("单机运行")]),t._v("，使维护文件版本的操作工具化")]),t._v(" "),v("p",[v("img",{attrs:{src:a(497),alt:""}})]),t._v(" "),v("h4",{attrs:{id:"特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" 特点：")]),t._v(" "),v("p",[t._v("使用软件来记录文件的不同版本，提高了工作效率，降低了手动维护版本的出错率")]),t._v(" "),v("h4",{attrs:{id:"缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点：")]),t._v(" "),v("p",[t._v("① "),v("strong",[t._v("单机运行")]),t._v("，不支持多人协作开发")]),t._v(" "),v("p",[t._v("② 版本数据库故障后，所有历史更新记录会丢失")]),t._v(" "),v("h3",{attrs:{id:"集中化的版本控制系统"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#集中化的版本控制系统"}},[t._v("#")]),t._v(" 集中化的版本控制系统")]),t._v(" "),v("p",[t._v("联网运行，支持多人协作开发；"),v("strong",[t._v("性能差、用户体验不好")])]),t._v(" "),v("p",[v("img",{attrs:{src:a(498),alt:""}})]),t._v(" "),v("p",[v("strong",[t._v("典型代表 "),v("code",[t._v("SVN")])])]),t._v(" "),v("h4",{attrs:{id:"特点-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#特点-2"}},[t._v("#")]),t._v(" 特点：")]),t._v(" "),v("p",[t._v("基于服务器、客户端的运行模式")]),t._v(" "),v("p",[t._v("① 服务器保存文件的所有更新记录")]),t._v(" "),v("p",[t._v("② 客户端"),v("strong",[t._v("只保留最新的文件版本")])]),t._v(" "),v("p",[t._v("**优点：**联网运行，支持多人协作开发")]),t._v(" "),v("h4",{attrs:{id:"缺点-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#缺点-2"}},[t._v("#")]),t._v(" 缺点：")]),t._v(" "),v("p",[t._v("① 不支持离线提交版本更新")]),t._v(" "),v("p",[t._v("② 中心服务器崩溃后，所有人无法正常工作")]),t._v(" "),v("p",[t._v("③ 版本数据库故障后，所有历史更新记录会丢失")]),t._v(" "),v("h2",{attrs:{id:"分布式版本控制系统"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分布式版本控制系统"}},[t._v("#")]),t._v(" 分布式版本控制系统")]),t._v(" "),v("p",[v("strong",[t._v("联网运行，支持多人协作开发；性能优秀、用户体验好")])]),t._v(" "),v("p",[v("img",{attrs:{src:a(499),alt:""}})]),t._v(" "),v("p",[v("strong",[t._v("典型代表："),v("code",[t._v("Git")])])]),t._v(" "),v("h4",{attrs:{id:"特点-3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#特点-3"}},[t._v("#")]),t._v(" 特点：")]),t._v(" "),v("p",[t._v("基于"),v("strong",[t._v("服务器、客户端")]),t._v("的运行模式")]),t._v(" "),v("p",[t._v("① 服务器保存文件的所有更新版本")]),t._v(" "),v("p",[t._v("② "),v("strong",[t._v("客户端是服务器的完整备份")]),t._v("，并不是只保留文件的最新版本")]),t._v(" "),v("p",[v("strong",[t._v("优点：")])]),t._v(" "),v("p",[t._v("① 联网运行，支持多人协作开发")]),t._v(" "),v("p",[t._v("② 客户端"),v("strong",[t._v("断网")]),t._v("后"),v("strong",[t._v("支持离线本地提交")]),t._v("版本更新")]),t._v(" "),v("p",[t._v("③ 服务器故障或损坏后，可使用任何一个客户端的备份进行恢复")]),t._v(" "),v("h2",{attrs:{id:"git-基础概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git-基础概念"}},[t._v("#")]),t._v(" Git 基础概念")]),t._v(" "),v("h2",{attrs:{id:"什么是-git"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是-git"}},[t._v("#")]),t._v(" 什么是 Git")]),t._v(" "),v("p",[v("code",[t._v("Git")]),t._v(" 是一个"),v("strong",[t._v("开源的分布式版本控制系统")]),t._v("，是目前世界上"),v("strong",[t._v("最先进")]),t._v("、"),v("strong",[t._v("最流行")]),t._v("的版本控制系统。可以快速高效地处理从很小到非常大的项目版本管理。")]),t._v(" "),v("p",[t._v("特点：项目越大越复杂，协同开发者越多，越能体现出 Git 的"),v("strong",[t._v("高性能")]),t._v("和"),v("strong",[t._v("高可用性")]),t._v("！")]),t._v(" "),v("h2",{attrs:{id:"git-的特性-⭐⭐⭐"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git-的特性-⭐⭐⭐"}},[t._v("#")]),t._v(" "),v("strong",[t._v("Git 的特性")]),t._v("(⭐⭐⭐)")]),t._v(" "),v("p",[t._v("Git 之所以快速和高效，主要依赖于它的如下两个特性：")]),t._v(" "),v("p",[t._v("① 直接记录快照，而非差异比较")]),t._v(" "),v("p",[t._v("② 近乎所有操作都是本地执行")]),t._v(" "),v("h4",{attrs:{id:"svn-的差异比较"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#svn-的差异比较"}},[t._v("#")]),t._v(" "),v("code",[t._v("SVN")]),t._v(" 的差异比较")]),t._v(" "),v("p",[t._v("传统的版本控制系统（例如 "),v("code",[t._v("SVN")]),t._v("）是"),v("strong",[t._v("基于差异")]),t._v("的版本控制，它们存储的是"),v("strong",[t._v("一组基本文件")]),t._v("和"),v("strong",[t._v("每个文件随时间逐步累积的差异")])]),t._v(" "),v("p",[v("img",{attrs:{src:a(500),alt:""}})]),t._v(" "),v("p",[t._v("**好处：**节省磁盘空间")]),t._v(" "),v("p",[t._v("**缺点：**耗时、效率低")]),t._v(" "),v("p",[t._v("​ 在每次切换版本的时候，都需要在基本文件的基础上，应用每个差异，从而生成目标版本对应的文件")]),t._v(" "),v("h4",{attrs:{id:"git-的记录快照"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git-的记录快照"}},[t._v("#")]),t._v(" "),v("code",[t._v("Git")]),t._v(" 的记录快照")]),t._v(" "),v("p",[v("strong",[t._v("Git 快照")]),t._v("是在原有文件版本的基础上重新生成一份新的文件，"),v("strong",[t._v("类似于备份")]),t._v("。为了效率，如果文件没有修改，Git")]),t._v(" "),v("p",[t._v("不再重新存储该文件，而是只保留一个链接指向之前存储的文件。")]),t._v(" "),v("p",[v("img",{attrs:{src:a(501),alt:""}})]),t._v(" "),v("p",[t._v("**缺点：**占用磁盘空间较大")]),t._v(" "),v("p",[v("strong",[t._v("优点：")]),t._v(" "),v("strong",[t._v("版本切换时非常快")]),t._v("，因为每个版本都是完整的文件快照，切换版本时直接恢复目标版本的快照即可。")]),t._v(" "),v("p",[t._v("**特点： ** "),v("strong",[t._v("空间换时间")])]),t._v(" "),v("h4",{attrs:{id:"近乎所有操作都是本地执行"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#近乎所有操作都是本地执行"}},[t._v("#")]),t._v(" "),v("strong",[t._v("近乎所有操作都是本地执行")])]),t._v(" "),v("p",[t._v("在 Git 中的绝大多数操作都"),v("strong",[t._v("只需要访问本地文件和资源")]),t._v("，一般不需要来自网络上其它计算机的信息")]),t._v(" "),v("p",[v("strong",[t._v("特性：")])]),t._v(" "),v("p",[t._v("① 断网后依旧可以在本地对项目进行版本管理")]),t._v(" "),v("p",[t._v("② 联网后，把本地修改的记录同步到云端服务器即可")]),t._v(" "),v("h2",{attrs:{id:"git-中的三个区域"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git-中的三个区域"}},[t._v("#")]),t._v(" "),v("strong",[v("code",[t._v("Git")]),t._v(" 中的三个区域")])]),t._v(" "),v("p",[t._v("使用 "),v("code",[t._v("Git")]),t._v(" 管理的项目，拥有三个区域，分别是"),v("strong",[t._v("工作区")]),t._v("、"),v("strong",[t._v("暂存区")]),t._v("、"),v("strong",[v("code",[t._v("Git")]),t._v(" 仓库")])]),t._v(" "),v("p",[v("img",{attrs:{src:a(502),alt:""}})]),t._v(" "),v("h2",{attrs:{id:"git-中的三种状态"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git-中的三种状态"}},[t._v("#")]),t._v(" "),v("code",[t._v("Git")]),t._v(" 中的三种状态")]),t._v(" "),v("ul",[v("li",[v("p",[v("strong",[t._v("已修改 "),v("code",[t._v("modified")])])]),t._v(" "),v("ul",[v("li",[t._v("表示修改了文件，但还没将修改的结果放到"),v("strong",[t._v("暂存区")])])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("已暂存 "),v("code",[t._v("staged")])])]),t._v(" "),v("ul",[v("li",[t._v("表示对已修改文件的当前版本做了标记，使之包含在"),v("strong",[t._v("下次提交的列表中")])])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("已提交 "),v("code",[t._v("committed")])])]),t._v(" "),v("ul",[v("li",[t._v("表示文件已经安全地保存在本地的 "),v("strong",[t._v("Git 仓库中")])])])])]),t._v(" "),v("p",[v("strong",[t._v("注意：")])]),t._v(" "),v("ul",[v("li",[t._v("工作区的文件被修改了，但还没有放到暂存区，就是"),v("strong",[t._v("已修改")]),t._v("状态。")]),t._v(" "),v("li",[t._v("如果文件已修改并放入暂存区，就属于"),v("strong",[t._v("已暂存")]),t._v("状态。")]),t._v(" "),v("li",[t._v("如果 Git 仓库中"),v("strong",[t._v("保存着特定版本")]),t._v("的文件，就属于"),v("strong",[t._v("已提交")]),t._v("状态。")])]),t._v(" "),v("h2",{attrs:{id:"基本的-git-工作流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基本的-git-工作流程"}},[t._v("#")]),t._v(" 基本的 "),v("code",[t._v("Git")]),t._v(" 工作流程")]),t._v(" "),v("p",[v("img",{attrs:{src:a(503),alt:""}})]),t._v(" "),v("p",[t._v("基本的 Git 工作流程如下：")]),t._v(" "),v("p",[t._v("① 在工作区中修改文件")]),t._v(" "),v("p",[t._v("② 将你想要下次提交的更改进行暂存")]),t._v(" "),v("p",[t._v("③ 提交更新，找到暂存区的文件，将快照永久性存储到 Git 仓库")]),t._v(" "),v("h1",{attrs:{id:"git基础"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git基础"}},[t._v("#")]),t._v(" "),v("code",[t._v("Git")]),t._v("基础")]),t._v(" "),v("h2",{attrs:{id:"安装并配置-git"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#安装并配置-git"}},[t._v("#")]),t._v(" 安装并配置 Git")]),t._v(" "),v("h2",{attrs:{id:"在-windows-中下载并安装-git"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#在-windows-中下载并安装-git"}},[t._v("#")]),t._v(" 在 "),v("code",[t._v("Windows")]),t._v(" 中下载并安装 "),v("code",[t._v("Git")])]),t._v(" "),v("p",[t._v("在开始使用 "),v("code",[t._v("Git")]),t._v(" 管理项目的版本之前，需要将它安装到计算机上。可以使用浏览器访问如下的网址，根据自己")]),t._v(" "),v("p",[t._v("的操作系统，选择下载对应的 "),v("code",[t._v("Git")]),t._v(" 安装包：")]),t._v(" "),v("p",[t._v("https://git-scm.com/downloads")]),t._v(" "),v("p",[v("img",{attrs:{src:a(504),alt:""}})]),t._v(" "),v("h2",{attrs:{id:"配置用户信息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#配置用户信息"}},[t._v("#")]),t._v(" 配置用户信息")]),t._v(" "),v("p",[t._v("安装完 "),v("code",[t._v("Git")]),t._v(" 之后，要做的第一件事就是设置自己的"),v("strong",[t._v("用户名")]),t._v("和"),v("strong",[t._v("邮件地址")]),t._v("。因为通过 "),v("code",[t._v("Git")]),t._v(" 对项目进行版本管理的时")]),t._v(" "),v("p",[t._v("候，"),v("code",[t._v("Git")]),t._v(" 需要使用这些基本信息，来记录是谁对项目进行了操作：")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('git config --global user.name "itheima"\ngit config --global user.email "itheima@itcast.cn"\n')])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br")])]),v("p",[t._v("**注意：**如果使用了 --global 选项，那么该命令只需要运行一次，即可永久生效。")]),t._v(" "),v("h2",{attrs:{id:"git-的全局配置文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git-的全局配置文件"}},[t._v("#")]),t._v(" Git 的全局配置文件")]),t._v(" "),v("p",[t._v("通过 "),v("code",[t._v("git config --global user.name")]),t._v(" 和 "),v("code",[t._v("git config --global user.email")]),t._v(" 配置的用户名和邮箱地址，会被写")]),t._v(" "),v("p",[t._v("入到 "),v("code",[t._v("C:/Users/用户名文件夹/.gitconfig")]),t._v(" 文件中。这个文件是 "),v("code",[t._v("Git")]),t._v(" 的"),v("strong",[t._v("全局配置文件")]),t._v("，"),v("strong",[t._v("配置一次即可永久生效")]),t._v("。")]),t._v(" "),v("p",[t._v("可以使用记事本打开此文件，从而查看自己曾经对 Git 做了哪些全局性的配置。")]),t._v(" "),v("p",[v("img",{attrs:{src:a(505),alt:""}})]),t._v(" "),v("h2",{attrs:{id:"检查配置信息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#检查配置信息"}},[t._v("#")]),t._v(" 检查配置信息")]),t._v(" "),v("p",[t._v("除了使用记事本查看全局的配置信息之外，还可以运行如下的终端命令，快速的查看 Git 的全局配置信息：")]),t._v(" "),v("div",{staticClass:"language-shell line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看所有的全局配置项")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --list --global\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看指定的全局配置项")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config user.name\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config user.email\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br")])]),v("h2",{attrs:{id:"获取帮助信息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#获取帮助信息"}},[t._v("#")]),t._v(" 获取帮助信息")]),t._v(" "),v("p",[t._v("可以使用 "),v("code",[t._v("git help <verb>")]),t._v(" 命令，无需联网即可在浏览器中打开帮助手册，例如：")]),t._v(" "),v("div",{staticClass:"language-shell line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打开 git config 命令的帮助手册")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" config\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br")])]),v("p",[t._v("如果不想查看完整的手册，那么可以用 -h 选项获得更简明的“help”输出：")]),t._v(" "),v("div",{staticClass:"language-shell line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 想要获取 git config 命令的快速参考")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config -h\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br")])]),v("h2",{attrs:{id:"git-的基本操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git-的基本操作"}},[t._v("#")]),t._v(" "),v("code",[t._v("Git")]),t._v(" 的基本操作")]),t._v(" "),v("h2",{attrs:{id:"获取-git-仓库的两种方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#获取-git-仓库的两种方式"}},[t._v("#")]),t._v(" 获取 "),v("code",[t._v("Git")]),t._v(" 仓库的两种方式")]),t._v(" "),v("p",[t._v("① 将尚未进行版本控制的本地目录"),v("strong",[t._v("转换")]),t._v("为 "),v("code",[t._v("Git")]),t._v(" 仓库")]),t._v(" "),v("p",[t._v("② 从其它服务器"),v("strong",[t._v("克隆")]),t._v("一个已存在的 "),v("code",[t._v("Git")]),t._v(" 仓库")]),t._v(" "),v("p",[t._v("以上两种方式都能够在自己的电脑上得到一个可用的 Git 仓库")]),t._v(" "),v("h2",{attrs:{id:"在现有目录中初始化仓库-⭐⭐⭐"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#在现有目录中初始化仓库-⭐⭐⭐"}},[t._v("#")]),t._v(" 在现有目录中初始化仓库(⭐⭐⭐)")]),t._v(" "),v("p",[t._v("如果自己有一个尚未进行版本控制的项目目录，想要用 "),v("code",[t._v("Git")]),t._v(" 来控制它，需要执行如下两个步骤：")]),t._v(" "),v("p",[t._v("① 在项目目录中，通过鼠标右键打开“"),v("code",[t._v("Git Bash")]),t._v("”")]),t._v(" "),v("p",[t._v("② 执行 "),v("code",[t._v("git init")]),t._v(" 命令将当前的目录转化为 "),v("code",[t._v("Git")]),t._v(" 仓库")]),t._v(" "),v("p",[v("code",[t._v("git init")]),t._v(" 命令会创建一个名为 .git 的隐藏目录，"),v("strong",[t._v("这个 .git 目录就是当前项目的 Git 仓库")]),t._v("，里面包含了"),v("strong",[t._v("初始的必要文件")]),t._v("，这些文件是 Git 仓库的"),v("strong",[t._v("必要组成部分")])]),t._v(" "),v("h2",{attrs:{id:"工作区中文件的-4-种状态"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#工作区中文件的-4-种状态"}},[t._v("#")]),t._v(" 工作区中文件的 4 种状态")]),t._v(" "),v("p",[t._v("工作区中的每一个文件可能有 4 种状态，这四种状态共分为两大类，如图所示：")]),t._v(" "),v("p",[v("img",{attrs:{src:a(506),alt:""}})]),t._v(" "),v("p",[t._v("**Git 操作的终极结果："),v("strong",[t._v("让工作区中的文件都处于")]),t._v("“未修改”**的状态。")]),t._v(" "),v("h2",{attrs:{id:"检查文件的状态-⭐⭐⭐"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#检查文件的状态-⭐⭐⭐"}},[t._v("#")]),t._v(" 检查文件的状态(⭐⭐⭐)")]),t._v(" "),v("p",[t._v("可以使用 "),v("code",[t._v("git status")]),t._v(" 命令查看文件处于什么状态，例如")]),t._v(" "),v("p",[t._v("![](./images/git status.png)")]),t._v(" "),v("p",[t._v("在状态报告中可以看到新建的 "),v("code",[t._v("index.html")]),t._v(" 文件出现在 "),v("code",[t._v("Untracked files")]),t._v("（未跟踪的文件） 下面。")]),t._v(" "),v("p",[t._v("未跟踪的文件意味着 "),v("strong",[v("code",[t._v("Git")]),t._v(" 在之前的快照（提交）中没有这些文件")]),t._v("；"),v("code",[t._v("Git")]),t._v(" 不会自动将之纳入跟踪范围，除非明确")]),t._v(" "),v("p",[t._v("地告诉它“我需要使用 Git 跟踪管理该文件”。")]),t._v(" "),v("h2",{attrs:{id:"以精简的方式显示文件状态"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#以精简的方式显示文件状态"}},[t._v("#")]),t._v(" 以精简的方式显示文件状态")]),t._v(" "),v("p",[t._v("使用 "),v("code",[t._v("git status")]),t._v(" 输出的状态报告很详细，但有些繁琐。如果希望以精简的方式显示文件的状态，可以使用如下")]),t._v(" "),v("p",[t._v("两条完全等价的命令，其中 "),v("strong",[t._v("-s")]),t._v(" 是 "),v("strong",[t._v("--short")]),t._v(" 的简写形式：")]),t._v(" "),v("div",{staticClass:"language-shell line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 以精简的方式显示文件状态")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status -s\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status --short\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br")])]),v("p",[t._v("未跟踪文件前面有红色的 "),v("strong",[t._v("??")]),t._v(" 标记，例如：")]),t._v(" "),v("p",[v("img",{attrs:{src:a(507),alt:""}})]),t._v(" "),v("h2",{attrs:{id:"跟踪新文件-⭐⭐⭐"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#跟踪新文件-⭐⭐⭐"}},[t._v("#")]),t._v(" 跟踪新文件(⭐⭐⭐)")]),t._v(" "),v("p",[t._v("使用命令 "),v("code",[t._v("git add")]),t._v(" 开始跟踪一个文件。 所以，要跟踪 "),v("code",[t._v("index.html")]),t._v(" 文件，运行如下的命令即可：")]),t._v(" "),v("div",{staticClass:"language-shell line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" index.html\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果文件过多，你项跟踪目录下所有文件")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" *.*\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br")])]),v("p",[t._v("此时再运行 "),v("code",[t._v("git status")]),t._v(" 命令，会看到 "),v("code",[t._v("index.html")]),t._v(" 文件在 "),v("code",[t._v("Changes to be committed")]),t._v(" 这行的下面，说明已被跟踪，并处于暂存状态：")]),t._v(" "),v("p",[v("img",{attrs:{src:a(508),alt:""}})]),t._v(" "),v("h2",{attrs:{id:"提交更新-⭐⭐⭐"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#提交更新-⭐⭐⭐"}},[t._v("#")]),t._v(" 提交更新(⭐⭐⭐)")]),t._v(" "),v("p",[t._v("现在暂存区中有一个 "),v("code",[t._v("index.html")]),t._v(" 文件等待被提交到 "),v("code",[t._v("Git")]),t._v(" 仓库中进行保存。可以执行 "),v("code",[t._v("git commit")]),t._v(" 命令进行提交,其中 "),v("code",[t._v("-m")]),t._v(" 选项后面是本次的提交消息，用来对提交的内容做进一步的描述：")]),t._v(" "),v("div",{staticClass:"language-shell line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"新建了index.html 文件"')]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("p",[t._v("提交成功之后，会显示如下的信息：")]),t._v(" "),v("p",[t._v("![](./images/git commit.png)")]),t._v(" "),v("p",[t._v("提交成功之后，再次检查文件的状态，得到提示如下：")]),t._v(" "),v("p",[v("img",{attrs:{src:a(509),alt:""}})]),t._v(" "),v("p",[v("img",{attrs:{src:a(510),alt:""}})]),t._v(" "),v("h2",{attrs:{id:"对已提交的文件进行修改"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#对已提交的文件进行修改"}},[t._v("#")]),t._v(" 对已提交的文件进行修改")]),t._v(" "),v("p",[t._v("目前，"),v("code",[t._v("index.html")]),t._v(" 文件已经被 "),v("code",[t._v("Git")]),t._v(" 跟踪，并且工作区和 "),v("code",[t._v("Git")]),t._v(" 仓库中的 "),v("code",[t._v("index.html")]),t._v(" 文件内容保持一致。当我们修改了工作区中 "),v("code",[t._v("index.html")]),t._v(" 的内容之后，再次运行 "),v("code",[t._v("git status")]),t._v(" 和 "),v("code",[t._v("git status -s")]),t._v(" 命令，会看到如下的内容：")]),t._v(" "),v("p",[v("img",{attrs:{src:a(511),alt:""}})]),t._v(" "),v("p",[t._v("文件 "),v("code",[t._v("index.html")]),t._v(" 出现在 "),v("code",[t._v("Changes not staged for commit")]),t._v(" 这行下面，说明"),v("strong",[t._v("已跟踪文件的内容发生了变化，但还没有放到暂存区")]),t._v("。")]),t._v(" "),v("p",[t._v("**注意：**修改过的、没有放入暂存区的文件前面有红色的 "),v("strong",[t._v("M")]),t._v(" 标记。")]),t._v(" "),v("h2",{attrs:{id:"暂存已修改的文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#暂存已修改的文件"}},[t._v("#")]),t._v(" 暂存已修改的文件")]),t._v(" "),v("p",[t._v("目前，工作区中的 "),v("code",[t._v("index.html")]),t._v(" 文件已被修改，如果要暂存这次修改，需要再次运行 "),v("code",[t._v("git add")]),t._v(" 命令，这个命令是个多功能的命令，主要有如下 3 个功效：")]),t._v(" "),v("p",[t._v("① 可以用它"),v("strong",[t._v("开始跟踪新文件")])]),t._v(" "),v("p",[t._v("② 把"),v("strong",[t._v("已跟踪的")]),t._v("、"),v("strong",[t._v("且已修改")]),t._v("的文件放到暂存区")]),t._v(" "),v("p",[t._v("③ 把有冲突的文件标记为已解决状态")]),t._v(" "),v("p",[v("img",{attrs:{src:a(512),alt:""}})]),t._v(" "),v("h2",{attrs:{id:"提交已暂存的文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#提交已暂存的文件"}},[t._v("#")]),t._v(" 提交已暂存的文件")]),t._v(" "),v("p",[t._v("再次运行 "),v("code",[t._v('git commit -m "提交消息"')]),t._v(" 命令，即可将暂存区中记录的 "),v("code",[t._v("index.html")]),t._v(" 的快照，提交到 "),v("code",[t._v("Git")]),t._v(" 仓库中进行保存：")]),t._v(" "),v("p",[v("img",{attrs:{src:a(513),alt:""}})]),t._v(" "),v("h2",{attrs:{id:"撤销对文件的修改"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#撤销对文件的修改"}},[t._v("#")]),t._v(" 撤销对文件的修改")]),t._v(" "),v("p",[t._v("**撤销对文件的修改指的是：**把对工作区中对应文件的修改，"),v("strong",[t._v("还原")]),t._v("成 Git 仓库中所保存的版本。")]),t._v(" "),v("p",[t._v("**操作的结果：**所有的修改会丢失，且无法恢复！"),v("strong",[t._v("危险性比较高，请慎重操作！")])]),t._v(" "),v("p",[v("img",{attrs:{src:a(514),alt:""}})]),t._v(" "),v("p",[t._v("**撤销操作的本质：**用 Git 仓库中保存的文件，覆盖工作区中指定的文件。")]),t._v(" "),v("h2",{attrs:{id:"向暂存区中一次性添加多个文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#向暂存区中一次性添加多个文件"}},[t._v("#")]),t._v(" 向暂存区中一次性添加多个文件")]),t._v(" "),v("p",[t._v("如果需要被暂存的文件个数比较多，可以使用如下的命令，一次性将所有的新增和修改过的文件加入暂存区：")]),t._v(" "),v("div",{staticClass:"language-shell line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("p",[v("strong",[t._v("今后在项目开发中，会经常使用这个命令，将新增和修改过后的文件加入暂存区")])]),t._v(" "),v("h2",{attrs:{id:"取消暂存的文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#取消暂存的文件"}},[t._v("#")]),t._v(" 取消暂存的文件")]),t._v(" "),v("p",[t._v("如果需要从暂存区中移除对应的文件，可以使用如下的命令：")]),t._v(" "),v("div",{staticClass:"language-shell line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset HEAD 要移出的文件名称\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("h2",{attrs:{id:"跳过使用暂存区域"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#跳过使用暂存区域"}},[t._v("#")]),t._v(" 跳过使用暂存区域")]),t._v(" "),v("p",[v("code",[t._v("Git")]),t._v(" 标准的工作流程是"),v("code",[t._v("工作区 → 暂存区 → Git 仓库")]),t._v("，但有时候这么做略显繁琐，此时可以跳过暂存区，直接将工作区中的修改提交到 "),v("code",[t._v("Git")]),t._v(" 仓库，这时候 "),v("code",[t._v("Git")]),t._v(" 工作的流程简化为了"),v("code",[t._v("工作区 → Git 仓库")])]),t._v(" "),v("p",[v("code",[t._v("Git")]),t._v(" 提供了一个跳过使用暂存区域的方式， 只要在提交的时候，给 "),v("code",[t._v("git commit")]),t._v(" 加上 "),v("code",[t._v("-a")]),t._v(" 选项，"),v("code",[t._v("Git")]),t._v(" 就会自动把所有已经跟踪过的文件暂存起来一并提交，从而跳过 "),v("code",[t._v("git add")]),t._v(" 步骤：")]),t._v(" "),v("div",{staticClass:"language-shell line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -a -m "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"日志信息"')]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("h2",{attrs:{id:"移除文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#移除文件"}},[t._v("#")]),t._v(" 移除文件")]),t._v(" "),v("p",[t._v("从 Git 仓库中移除文件的方式有两种：")]),t._v(" "),v("p",[t._v("① 从 Git 仓库和工作区中"),v("strong",[t._v("同时移除")]),t._v("对应的文件")]),t._v(" "),v("p",[t._v("② 只从 Git 仓库中移除指定的文件，但保留工作区中对应的文件")]),t._v(" "),v("div",{staticClass:"language-shell line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从 Git仓库和工作区中同时移除 index.js 文件")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -f index.js\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 只从 Git 仓库中移除 index.css，但保留工作区中的 index.css 文件")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" --cached index.css\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br")])]),v("h2",{attrs:{id:"忽略文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#忽略文件"}},[t._v("#")]),t._v(" 忽略文件")]),t._v(" "),v("p",[t._v("一般我们总会有些文件无需纳入 "),v("code",[t._v("Git")]),t._v(" 的管理，也不希望它们总出现在未跟踪文件列表。 在这种情况下，我们可以创建一个名为 "),v("code",[t._v(".gitignore")]),t._v(" 的配置文件，列出要忽略的文件的匹配模式。")]),t._v(" "),v("p",[t._v("文件 "),v("code",[t._v(".gitignore")]),t._v(" 的格式规范如下：")]),t._v(" "),v("p",[t._v("① 以 "),v("strong",[t._v("# 开头")]),t._v("的是注释")]),t._v(" "),v("p",[t._v("② 以 "),v("strong",[t._v("/ 结尾")]),t._v("的是目录")]),t._v(" "),v("p",[t._v("③ 以 "),v("strong",[t._v("/ 开头")]),t._v("防止递归")]),t._v(" "),v("p",[t._v("④ 以 "),v("strong",[t._v("! 开头")]),t._v("表示取反")]),t._v(" "),v("p",[t._v("⑤ 可以使用 "),v("strong",[t._v("glob 模式")]),t._v("进行文件和文件夹的匹配（glob 指简化了的正则表达式）")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("星号 *")]),t._v(" 匹配"),v("strong",[t._v("零个或多个任意字符")])]),t._v(" "),v("li",[v("strong",[v("code",[t._v("[abc]")])]),t._v(" 匹配"),v("strong",[t._v("任何一个列在方括号中的字符")]),t._v(" （此案例匹配一个 a 或匹配一个 b 或匹配一个 c）")]),t._v(" "),v("li",[v("strong",[t._v("问号 ?")]),t._v(" 只匹配"),v("strong",[t._v("一个任意字符")])]),t._v(" "),v("li",[v("strong",[t._v("两个星号 **")]),t._v(" 表示匹配"),v("strong",[t._v("任意中间目录")]),t._v("（比如 a/**/z 可以匹配 a/z 、 a/b/z 或 a/b/c/z 等）")]),t._v(" "),v("li",[t._v("在方括号中使用"),v("strong",[t._v("短划线")]),t._v("分隔两个字符， 表示所有在这两个字符范围内的都可以匹配（比如 [0-9] 表示匹配所有 0 到 9 的数字）")])]),t._v(" "),v("h2",{attrs:{id:"gitignore-文件的例子"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#gitignore-文件的例子"}},[t._v("#")]),t._v(" "),v("code",[t._v(".gitignore")]),t._v(" "),v("strong",[t._v("文件的例子")])]),t._v(" "),v("p",[v("img",{attrs:{src:a(515),alt:""}})]),t._v(" "),v("h2",{attrs:{id:"查看提交历史"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#查看提交历史"}},[t._v("#")]),t._v(" 查看提交历史")]),t._v(" "),v("p",[t._v("如果希望回顾项目的提交历史，可以使用 "),v("code",[t._v("git log")]),t._v(" 这个简单且有效的命令")]),t._v(" "),v("div",{staticClass:"language-shell line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 按时间先后顺序列出所有的提交历史，最近的提交在最上面")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log\n\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 只展示最新的两条提交历史，数字可以按需进行填写")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log -2\n\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在一行上展示最近两条提交历史的信息")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log -2 --pretty"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("oneline\n\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在一行上展示最近两条提交历史信息，并自定义输出的格式")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# &h 提交的简写哈希值  %an 作者名字  %ar 作者修订日志  %s 提交说明")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log -2 --pretty"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("format:"),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%h | %an | %ar | %s"')]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br"),v("span",{staticClass:"line-number"},[t._v("6")]),v("br"),v("span",{staticClass:"line-number"},[t._v("7")]),v("br"),v("span",{staticClass:"line-number"},[t._v("8")]),v("br"),v("span",{staticClass:"line-number"},[t._v("9")]),v("br"),v("span",{staticClass:"line-number"},[t._v("10")]),v("br"),v("span",{staticClass:"line-number"},[t._v("11")]),v("br"),v("span",{staticClass:"line-number"},[t._v("12")]),v("br")])]),v("h2",{attrs:{id:"回退到指定的版本"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#回退到指定的版本"}},[t._v("#")]),t._v(" 回退到指定的版本")]),t._v(" "),v("div",{staticClass:"language-shell line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在一行上展示所有的提交历史")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --pretty"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("oneline\n\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用 git reset --hard 命令，根据指定的提交 ID 回退到指定版本")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("CommitID"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在旧版本中使用 git reflog --pretty=oneline 命令，查看命令操作的历史")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reflog --pretty"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("onelone\n\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 再次根据最新的提交 ID，跳转到最新的版本")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("CommitID"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br"),v("span",{staticClass:"line-number"},[t._v("6")]),v("br"),v("span",{staticClass:"line-number"},[t._v("7")]),v("br"),v("span",{staticClass:"line-number"},[t._v("8")]),v("br"),v("span",{staticClass:"line-number"},[t._v("9")]),v("br"),v("span",{staticClass:"line-number"},[t._v("10")]),v("br"),v("span",{staticClass:"line-number"},[t._v("11")]),v("br")])])])}),[],!1,null,null,null);s.default=_.exports},496:function(t,s,a){t.exports=a.p+"assets/img/1.e408b249.png"},497:function(t,s,a){t.exports=a.p+"assets/img/2.be4c3334.png"},498:function(t,s,a){t.exports=a.p+"assets/img/3.a441265d.png"},499:function(t,s,a){t.exports=a.p+"assets/img/4.61d649fa.png"},500:function(t,s,a){t.exports=a.p+"assets/img/5.a6d27430.png"},501:function(t,s,a){t.exports=a.p+"assets/img/6.33019b88.png"},502:function(t,s,a){t.exports=a.p+"assets/img/7.8cd38b42.png"},503:function(t,s,a){t.exports=a.p+"assets/img/8.3162261a.png"},504:function(t,s,a){t.exports=a.p+"assets/img/9.c9f778ee.png"},505:function(t,s,a){t.exports=a.p+"assets/img/10.b8d6f597.png"},506:function(t,s,a){t.exports=a.p+"assets/img/11.5d52c12c.png"},507:function(t,s,a){t.exports=a.p+"assets/img/12.3d49de63.png"},508:function(t,s,a){t.exports=a.p+"assets/img/13.7678323f.png"},509:function(t,s,a){t.exports=a.p+"assets/img/14.4dbc91d0.png"},510:function(t,s,a){t.exports=a.p+"assets/img/15.065800c7.png"},511:function(t,s,a){t.exports=a.p+"assets/img/16.df517130.png"},512:function(t,s,a){t.exports=a.p+"assets/img/17.4afbe5d2.png"},513:function(t,s,a){t.exports=a.p+"assets/img/18.de541fa1.png"},514:function(t,s,a){t.exports=a.p+"assets/img/19.84984207.png"},515:function(t,s,a){t.exports=a.p+"assets/img/20.f3466425.png"}}]);
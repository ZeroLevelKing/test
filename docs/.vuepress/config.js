module.exports =
{
    base: '/test/',
    locales:
    {
        '/':
        {
            lang: 'zh-CN',
            title: '计算概论学业辅导文档'
        }
    },
    themeConfig:
    {
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'FH500/test',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',

        // 以下为可选的编辑链接选项

        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'main',
        editLinks: true,
        editLinkText: '在 Github 上编辑此页',
        lastUpdated: '最后更新时间',
        nav:
        [
            { text: "C/C++", link: "/" }
        ],
        sidebar:
        [
            {
                title: "先前准备",
                sidebarDepth: 2,
                collapsable: false,
                children:
                [
                    '/precede/Preface',
                    '/precede/Installation',
                    '/precede/VSCode',
                    '/precede/VSCodeUsage'
                ]
            },
            {
                title: "基本知识",
                sidebarDepth: 2,
                collapsable: false,
                children:
                [
                    '/basic/Variables',
                ]
            },
            {
                title: "其他",
                sidebarDepth: 2,
                collapsable: false,
                children:
                [
                    '/basic/Debug'
                ]
            }
        ]
    }
}
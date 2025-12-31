// @keep-sorted
export default defineAppConfig({
  component: {
    codeblock: {
      /** 代码块触发折叠的行数 */
      triggerRows: 32,
      /** 代码块折叠后的行数 */
      collapsedRows: 16,
      /** 启用代码块缩进导航会关闭空格渲染 */
      enableIndentGuide: true,
      /** 代码块缩进导航(Indent Guige)竖线匹配空格数 */
      indent: 4,
      /** tab渲染宽度 */
      tabSize: 3,
    },
  },
});

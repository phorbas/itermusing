export async function viewas_md_block(content, ctx) {
  const h = ctx.imtiny
  content = await content?.text()
  return h('md-block', {}, ''+content)
}

export async function viewas_zero_md(content, ctx) {
  const h = ctx.imtiny
  content = await content?.text()
  return h('zero-md', {},
    h('script', {type:'text/markdown'}, ''+content) )
}


export async function itermuse(ctx) {
  ctx.mimeview.set('text/plain', ctx.view_pre_text)

  ctx.mimeview_when('md-block', {'text/markdown': viewas_md_block})
  ctx.mimeview_when('zero-md', {'text/markdown': viewas_zero_md})
}

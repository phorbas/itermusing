
export async function viewas_md_block(content, ctx) {
  content = await content?.text()
  return ctx.imtiny('md-block', {}, ''+content)
}

export async function viewas_zero_md(content, ctx) {
  content = await content?.text()
  return ctx.imtiny('zero-md', {},
    ctx.imtiny('script', {type:'text/markdown'}, ''+content) )
}

export async function itermuse(ctx) {
  ctx.mimeview.set('text/plain', ctx.view_pre_text)
  ctx.mimeview.set('text/html', ctx.view_pre_text)

  ctx.mime_when('text/markdown', 'md-block', viewas_md_block)
  ctx.mime_when('text/markdown', 'zero-md', viewas_zero_md)
}

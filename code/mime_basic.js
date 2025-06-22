
//////
// Use md-block if available
//   from Lea Verou
//   https://md-block.verou.me/

export const autoload_md_block = (ctx) =>
  ctx.use_cdn(`https://md-block.verou.me/md-block.js`)

export async function viewas_md_block(content, ctx) {
  const h = ctx.imtiny
  content = await content?.text()
  return h('md-block', {}, ''+content)
}


//////
// Use zero-md if available
//  from Jason Lee (zerodevx)
//  https://zerodevx.github.io/zero-md/

export const autoload_zero_md = (ctx, version) =>
  ctx.use_cdn(`https://cdn.jsdelivr.net/npm/zero-md@${version || '3'}/dist/index.min.js?register`)

export async function viewas_zero_md(content, ctx) {
  const h = ctx.imtiny
  content = await content?.text()
  return h('zero-md', {},
    h('script', {type:'text/markdown'}, ''+content) )
}



//////
// Itermuse setup hook

export async function itermuse(ctx) {
  ctx.mimeview.set('text/plain', ctx.view_pre_text)

  ctx.mimeview_when('md-block', {'text/markdown': viewas_md_block})
  ctx.mimeview_when('zero-md', {'text/markdown': viewas_zero_md})
}


//////
// Itermuse initialization hook

const import_params = new URL(import.meta.url).searchParams
export async function init_itermuse(ctx) {
  let ver_md_block = import_params.get('md-block')
  if (null != ver_md_block)
    autoload_md_block(ctx, ver_md_block)

  let ver_zero_md = import_params.get('zero-md')
  if (null != ver_zero_md)
    autoload_zero_md(ctx, ver_zero_md)

  await itermuse(ctx)
  return true
}


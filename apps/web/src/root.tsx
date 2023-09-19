/**
 * https://remix.run/docs/en/main/file-conventions/root
 */
import { RootTemplate } from '@/_root/template'
import { viewModel } from '@/_root/viewModel'
import { hydrateRootViewModel } from '@/core/architecture/viewModel.root'

export { links, meta } from '@/_root/meta'
export { action, loader } from '@/_root/viewModel.server'

export default () => hydrateRootViewModel(RootTemplate, viewModel)

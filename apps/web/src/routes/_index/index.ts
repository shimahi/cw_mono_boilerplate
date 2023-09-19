import { hydrateViewModel } from '@/core/architecture/viewModel'

import { Template } from './template'
import { viewModel } from './viewModel'

export { action, loader } from './viewModel.server'
export default () => hydrateViewModel(Template, viewModel, { layout: 'basic' })

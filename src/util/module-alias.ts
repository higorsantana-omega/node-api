import * as path from 'path'
import { addAlias, addAliases } from 'module-alias'

const files = path.resolve(__dirname, '../..')

addAliases({
    '&src': path.join(files, 'src'),
    '&test': path.join(files, 'test')
})
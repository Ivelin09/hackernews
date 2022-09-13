import { getFunctionName } from '@mui/utils/getDisplayName';
import authHandler from '../../auth/authHandler'

export default (req, res) => authHandler("/register", req, res);
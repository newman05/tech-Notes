import { useSelector } from 'react-redux'
import { selectCurrentToken } from '../features/auth/authSlice'
import { jwtDecode } from 'jwt-decode'

const useAuth = () => {
  const token = useSelector(selectCurrentToken)

  let isManager = false
  let isAdmin = false
  let status = 'Employee'
  let username = ''
  let roles = []

  if (token) {
    try {
      const decoded = jwtDecode(token)
      const userInfo = decoded?.UserInfo || {}

      username = userInfo.username || ''
      roles = Array.isArray(userInfo.roles) ? userInfo.roles : []

      isManager = roles.includes('Manager')
      isAdmin = roles.includes('Admin')

      if (isAdmin && isManager) status = 'Admin, Manager'
      else if (isAdmin) status = 'Admin'
      else if (isManager) status = 'Manager'
    } catch (err) {
      console.error('Token decode failed:', err)
    }
  }

  return { username, roles, status, isManager, isAdmin }
}

export default useAuth

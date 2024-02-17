import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

export default function Display() {
  const navigate = useNavigate()
  const handleCompany = () => {
    navigate('/companyform')
  }
  const handleUser = () => {
    navigate('/userform')
  }
  return (
    <div>
      <Button className='p-7 m-10' onClick={handleCompany}>
        Continue as Company
      </Button>
      <Button className='p-7 m-10' onClick={handleUser}>
        Continue User
      </Button>
    </div>
  )
}

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
    <div className='w-[100%] flex justify-center mt-44'>
      <div className='flex flex-col w-[35%] border border-gray-400 rounded-md'>
        <Button className='p-10 m-5 text-3xl' onClick={handleCompany}>
          Continue as Company
        </Button>
        <Button className='p-10 m-5 text-3xl' onClick={handleUser}>
          Continue User
        </Button>
      </div>
    </div>
  )
}

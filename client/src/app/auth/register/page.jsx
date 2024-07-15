import SideLeftAuth from "@/components/organisms/side_left_auth"
import SideRightRegister from "@/components/organisms/side_right_register"

export default function RegisterPage() {
  return (
    <div className="flex">
      <SideLeftAuth />
      <SideRightRegister />
    </div>
  )
}

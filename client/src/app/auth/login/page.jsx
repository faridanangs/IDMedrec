import SideLeftAuth from "@/components/organisms/side_left_auth"
import SideRightLogin from "@/components/organisms/side_right_login"

export default function LoginPage() {
  return (
    <div className="flex">
      <SideLeftAuth />
      <SideRightLogin />
    </div>
  )
}

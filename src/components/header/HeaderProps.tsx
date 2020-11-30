import homeAction from "@/store/actions/homeAction";
import { HomeState } from "@/typings/state";
import { RouteComponentProps } from "react-router-dom";

interface Props{
  showHeader?:boolean 
  bgColor?:string 
}
type HeaderProps = Props &
RouteComponentProps &
Pick<typeof homeAction,'setCurrentCategory'> &
Pick<HomeState,'currentCategory'>

export default HeaderProps
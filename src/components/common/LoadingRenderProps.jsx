import LoadingIcon from "./LoadingIcon"
export default function LoadingRenderProps({data,children}){

    if(data == null){
        return <LoadingIcon hidden={false}></LoadingIcon>
    }
    if(data.length == 0){
        return <LoadingIcon hidden={false}></LoadingIcon>
    }
    return children

}
import useGetApiData from './Utils'

 const CustomHook = () => {
    let product=useGetApiData('https://fakestoreapi.com/products/1')
//     let [Data,setProduct]=useState({})
//     useEffect(()=>{
//         getData()

//     },[])
// async function getData(){
//     let res = await fetch('https://fakestoreapi.com/products/id');
//      Data = await res.json();
//     console.log(Data);

//     setProduct(Data);
// }

 //instead of writing above code 
  return (
    <div className="text-capitalize text-center mt-5">
   <h1>Custom Hook</h1>
   <div>{Object.keys(product)}</div>
   <div>{product.title}</div>
   <div>{product.price}</div>
   </div>
  )
}

export default CustomHook

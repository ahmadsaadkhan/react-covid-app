import useFetch from '../components/useFetch';

const Home = () => {
    const {data, isPending, isError} = useFetch();
    console.log(data);
    return (  )
}
 
export default Home;
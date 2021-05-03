import useFetch from '../components/useFetch';

const Home = () => {
    const {data, isPending, isError} = useFetch();
    console.log(data);
    return (
        <div></div>
    )
}
 
export default Home;
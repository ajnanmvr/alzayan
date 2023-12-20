import List from "../../components/List";
import Axios from "../../utils/Axios";
import axios from "axios";

async function Products() {
  const data = await Axios.get(process.env.SERVER_URL+"data");
  const products = data.data.data
  console.log(products)
  return (
    <div>
      dfds
    </div>
  );

}

export default Products;

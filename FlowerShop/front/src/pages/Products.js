import Product from "../components/product/Product"
import { test } from "../helpers/productsList"


export default function Products () {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Test</h2>
                <ul className="products">
                    
                    {test?.map((project, index) => {
                        return (
                            <Product 
                                key={index} 
                                title={project.title}  
                                img={project.img}
                                index={index}
                            />
                        )
                    })}


                </ul>
            </div>
        </main>
    )
}
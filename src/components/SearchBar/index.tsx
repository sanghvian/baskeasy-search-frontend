import algoliasearch from 'algoliasearch/lite';
import { Card, Col, Row, Tag } from 'antd';
import { Hits, InstantSearch, SearchBox, useHits } from 'react-instantsearch';
import './SearchBar.css'


const searchClient = algoliasearch('71IKYQCXEA', '1c17ebea98de16faac1d8a7010d6a077');

function Hit({ hit }: any) {
    return JSON.stringify(hit);
}

interface SearchHit {
    objectID: string
    name?: string
    basePrice?: number
    unitOfMeasure?: string
    pricePer?: string
    averageWeight?: string
    storeName?: string
}

export const SearchComp = () => {
    // const { hits, results, sendEvent } = useHits(props);
    return (
        <InstantSearch
            searchClient={searchClient} indexName="baskeasy-products"
            stalledSearchDelay={500}
        >
            <SearchBox placeholder="Search for products" />
            <div className='search-container'>
                <Hits
                    hitComponent={({ hit }) => (
                        <Card title={hit.name} bordered={false}>
                            <p>Base Price: <strong> {hit.basePrice}</strong></p>
                            <p>Unit of Measure: {hit.unitOfMeasure}</p>
                            <p>Price Per: {hit.pricePer}</p>
                            <p>Average Weight: {hit.averageWeight}</p>
                            <Tag color='volcano'> {hit.storeName}</Tag>
                        </Card>
                    )}
                />;
            </div>
        </InstantSearch>
    );
}


export default SearchComp;
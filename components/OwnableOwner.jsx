import { useState, useEffect } from 'react';
import { JsonRpcProvider, Contract } from 'ethers';

export default function OwnableOwner({ address, network }) {
  const [ownerAddress, setOwnerAddress] = useState(false);

  useEffect(() => {

    console.log("address", address);

    async function getOwner() {
        const provider = new JsonRpcProvider(`https://${network}.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_API_KEY}`);
        const contract = new Contract(address, ["function owner() view returns (address)"], provider);

        const result = await contract.owner();

        console.log("owner", result);
        setOwnerAddress(result);
    }

    if (address) {
        getOwner();
    }
  }, []);

  return (
    <div className='nx-text-center'>
        {ownerAddress === false ? (
            <span className="loader"></span>
        ):(
            <p className = "nx-text-xs">            
                <a href={`https://etherscan.io/address/${ownerAddress}`}>{ownerAddress}</a>
            </p>
        )}
    </div>
  );
}
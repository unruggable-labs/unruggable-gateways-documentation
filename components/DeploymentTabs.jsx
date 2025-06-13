import { useEffect, useState } from 'react';
import ResolveName from './ResolveName'
import { Tabs } from 'nextra/components'

const chainOptions = [
    {"key": "mainnet", "text": "Mainnet", "index":0},
    {"key": "sepolia", "text": "Sepolia", "index":1},
]

const mainnetDeployments = [
    {"chain": "Arbitrum One", "address": "arbitrum.verifier.unruggable.eth"},
    {"chain": "Base", "address": "base.verifier.unruggable.eth"},
    {"chain": "Optimism", "address": "optimism.verifier.unruggable.eth"},
    {"chain": "Linea", "address": "linea.verifier.unruggable.eth"},
    {"chain": "Scroll", "address": "scroll.verifier.unruggable.eth"},
    {"chain": "Self", "address": "self.verifier.unruggable.eth"},
];

const sepoliaDeployments = [
    {"chain": "Arbitrum One", "address": "arbitrum-sepolia.verifier.unruggable.eth"},
    {"chain": "Base", "address": "base-sepolia.verifier.unruggable.eth"},
    {"chain": "Optimism", "address": "optimism-sepolia.verifier.unruggable.eth"},
    {"chain": "Linea", "address": "linea-sepolia.verifier.unruggable.eth"},
    {"chain": "Scroll", "address": "scroll-sepolia.verifier.unruggable.eth"},
    {"chain": "Trusted", "address": "trusted-sepolia.verifier.unruggable.eth"},
    {"chain": "Self", "address": "self-sepolia.verifier.unruggable.eth"},
];

const h2Class = "nx-font-semibold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100 nx-mt-10 nx-border-b nx-pb-1 nx-text-3xl nx-border-neutral-200/70 contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400";
const tableClass = "nx-block nx-overflow-x-scroll nextra-scrollbar nx-mt-6 nx-p-0 first:nx-mt-0";
const trClass = "nx-m-0 nx-border-t nx-border-gray-300 nx-p-0 dark:nx-border-gray-600 even:nx-bg-gray-100 even:dark:nx-bg-gray-600/20";
const thClass="nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 nx-font-semibold dark:nx-border-gray-600";
const tdClass="nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 dark:nx-border-gray-600";

export default function DeploymentTabs() {
    
    const [defaultTabIndex, setDefaultTabIndex] = useState(false);

    useEffect(() => {

        const urlParams = new URLSearchParams(window.location.search);
        const chain = urlParams.get("chain");
        const chainIndex = chainOptions.findIndex((e) => e.key == chain);

        setDefaultTabIndex(chainIndex);
    });

    const handleChange = (e) => {
        console.log("lol", e);
    
        // Get the current URL
        const url = new URL(window.location);
    
        // Update or add a query parameter
        url.searchParams.set('chain', chainOptions[e].key);
    
        // Update the browser's URL without reloading the page
        history.replaceState(null, '', url.toString());
    }


    return (

        <>
        {defaultTabIndex && (
            <Tabs 
                defaultIndex={defaultTabIndex}
                items={chainOptions.map((e)=>e.text)}
                onChange={handleChange}>
                <Tabs.Tab>
                    <h2 className={h2Class}>Current Mainnet Deployments</h2>

                    <p>The current deployments for our verifiers can be found at the following addresses on the <span className='nx-font-bold'>Ethereum Mainnet</span>:</p>

                    <table className={tableClass}>
                        <thead>
                            <tr className={trClass}>
                                <th className={thClass}>Chain</th>
                                <th className={thClass}>Address</th>    
                            </tr>
                        </thead>
                        <tbody>
                            {mainnetDeployments.map(({chain, address}) => (
                                <tr key={`mainnet-${chain}`} className={trClass}>
                                    <td className={tdClass}>{chain}</td>
                                    <td className={tdClass}><ResolveName name={address} network="mainnet"/></td>
                                </tr>
                            ))} 
                        </tbody>
                    </table>
                </Tabs.Tab>

                <Tabs.Tab>
                    <h2 className={h2Class}>Current Sepolia Deployments</h2>

                    <p>The current deployments for our verifiers can be found at the following addresses on the <span className='nx-font-bold'>Sepolia testnet</span>:</p>

                    <table className={tableClass}>
                        <thead>
                            <tr className={trClass}>
                                <th className={thClass}>Chain</th>
                                <th className={thClass}>Address</th>    
                            </tr>
                        </thead>
                        <tbody>
                            {sepoliaDeployments.map(({chain, address}) => (
                                <tr key={`sepolia-${chain}`} className={trClass}>
                                    <td className={tdClass}>{chain}</td>
                                    <td className={tdClass}><ResolveName name={address} network="sepolia"/></td>
                                </tr>
                            ))} 
                        </tbody>
                    </table>
                </Tabs.Tab>
            </Tabs>
        )}
        </>
    )
}
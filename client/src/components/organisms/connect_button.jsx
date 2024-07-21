"use client";
import { useAccount, useConnect, useDisconnect, useSwitchChain } from "wagmi";
import metamaskBefore from "@/../../public/icons/metamask-before-conn.svg";
import metamaskAfter from "@/../../public/icons/metamask.svg";
import eth from "@/../../public/icons/eth-logo.svg";
import polygonAmoy from "@/../../public/icons/polygon1.svg";
import polygon from "@/../../public/icons/polygon.png";
import { metaMask } from "wagmi/connectors";
import Image from "next/image";
import { formatEthErrorMsg } from "@/context/errorHandler";
import { useEffect } from "react";

export const ConnectButton = () => {
  const { address, chainId } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const { chains, switchChain, error } = useSwitchChain();

  useEffect(() => {
    if (error) {
      try {
        return formatEthErrorMsg(error);
      } catch (error) {
        return;
      }
    }
  }, [error]);

  return (
    <div>
      {address ? (
        <div className="flex items-center gap-6">
          <div className="dropdown dropdown-left">
            <div tabIndex={0} role="button" className="m-1">
              <Image
                src={chainId === 80002 ? polygonAmoy : polygon}
                alt="chain icon"
                width={20}
                height={20}
                priority
                quality={100}
                className="hover:cursor-pointer hover:scale-110"
              />
            </div>
            <div
              tabIndex={0}
              className="dropdown-content menu rounded-box z-[1] w-52 p-2 sm:shadow-md backdrop-blur-md sm:bg-transparent bg-slate-400"
            >
              {chains.map((chain) => (
                <div
                  className="flex gap-2 items-center justify-start p-2 my-1 hover:cursor-pointer hover:scale-110 transition-all duration-300"
                  key={chain.id}
                  onClick={() => switchChain({ chainId: chain.id })}
                >
                  <Image
                    src={chain.name == "Polygon Amoy" ? polygonAmoy : polygon}
                    alt="metamask icon"
                    width={20}
                    height={20}
                    priority
                    quality={100}
                  />
                  <h1>{chain.name}</h1>
                </div>
              ))}
            </div>
          </div>
          <div onClick={() => disconnect()}>
            <Image
              className="hover:scale-110 cursor-pointer w-6 sm:w-8"
              src={metamaskAfter}
              alt="metamask icon"
              width={40}
              height={40}
              priority
              quality={100}
            />
          </div>
        </div>
      ) : (
        <div onClick={() => connect({ connector: metaMask() })}>
          <Image
            className="hover:scale-110 cursor-pointer"
            src={metamaskBefore}
            alt="metamask icon"
            width={35}
            height={35}
            priority
            quality={100}
          />
        </div>
      )}
    </div>
  );
};

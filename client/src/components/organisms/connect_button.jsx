"use client";
import { useAccount, useConnect, useDisconnect, useSwitchChain } from "wagmi";
import metamaskBefore from "@/../../public/icons/metamask-before-conn.svg";
import metamaskAfter from "@/../../public/icons/metamask.svg";
import polygonAmoy from "@/../../public/icons/polygon1.svg";
import { metaMask } from "wagmi/connectors";
import Image from "next/image";
import { useEffect } from "react";

export const ConnectButton = () => {
  const { address, chainId } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const { switchChain } = useSwitchChain();

  useEffect(() => {
    if (chainId !== 80002) {
      switchChain({
        chainId: 80002,
      });
    }
  }, [chainId]);

  return (
    <div>
      {address ? (
        <div className="flex items-center gap-6">
          <div className="dropdown dropdown-left">
            <div tabIndex={0} role="button" className="m-1">
              <Image
                src={polygonAmoy}
                alt="chain icon"
                width={20}
                height={20}
                priority
                quality={100}
                className="hover:cursor-pointer hover:scale-110"
              />
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

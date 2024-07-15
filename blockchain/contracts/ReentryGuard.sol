// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

abstract contract ReentrancyGuard {
    bool private _status;

    error ReentrancyGuardReentrantCall();

    modifier nonReentrant() {
        if (_status == true) {
            revert ReentrancyGuardReentrantCall();
        }

        _status = true;

        _;

        _status = false;
    }
}

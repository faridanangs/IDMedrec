// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

library Counters {
    struct Counter {
        uint32 _valueRecord;
        uint32 _valuePatient;
        uint32 _valueDoctor;
    }

    function current(
        Counter storage counter,
        uint8 whoIs
    ) internal view returns (uint32) {
        return
            whoIs == 1
                ? counter._valueRecord
                : whoIs == 2
                    ? counter._valueDoctor
                    : counter._valuePatient;
    }

    function increment(Counter storage counter, uint8 whoIs) internal {
        unchecked {
            whoIs == 1
                ? counter._valueRecord += 1
                : whoIs == 2
                    ? counter._valueDoctor += 1
                    : counter._valuePatient += 1;
        }
    }
}

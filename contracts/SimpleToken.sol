pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";

contract SimpleToken is ERC20Mintable {
  string public constant name = "Simple Token";
  string public constant symbol = "SMT";
  uint8 public constant decimals = 18;
}
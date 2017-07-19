const Block = require('./Block')

function createGenesisBlock () {
  return new Block(0, new Date(), 'Genesis Block', '0')
}

function nextBlock (lastBlock) {
  const index = lastBlock.index + 1
  const timestamp = lastBlock.timestamp
  const data = lastBlock.data
  const hash = lastBlock.hash
  return new Block(index, timestamp, data, hash)
}

function main () {
  let blockchain = []
  blockchain[blockchain.length] = createGenesisBlock()
  let previousBlock = blockchain[0]

  for (let i = 0; i < 20; i++) {
    let addBlock = nextBlock(previousBlock)
    blockchain[blockchain.length] = addBlock
    previousBlock = addBlock
    console.log(`Block ${addBlock.index} has been added to the blockchain!`)
    console.log(`Hash: ${addBlock.hash}\n`)
  }
}

main()

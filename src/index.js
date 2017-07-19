const Block = require('./Block')

function createGenesisBlock () {
  const index = 0
  const today = new Date()
  const timestamp = today.getTime()
  const data = 'Genesis Block'
  const hash = '0'
  return new Block(index, timestamp, data, hash)
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

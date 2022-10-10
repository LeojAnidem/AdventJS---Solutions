const countPackages = (carriers, carrierID) => {
  const findWorker = (workerId, workerArr) => 
    workerArr.find(({0:id}) => id === workerId)

  const filterWorkers = (workersId, workerArr) => 
    workersId.map(id => findWorker(id, workerArr))

  const amountWorkers = (workers, carriers) => {
    let totalAmount = 0

    workers.map(({1:amount ,2:subworkersId}) => {
      if (subworkersId.length > 0) {
        const subWorkers = filterWorkers(subworkersId, carriers)
        totalAmount += amountWorkers(subWorkers, carriers)
      }
      totalAmount += amount
    })

    return totalAmount
  }

  let packages = 0
  const {1:amount, 2:workersId} = findWorker(carrierID, carriers)
  
  if (workersId.length > 0) {
    const workers = filterWorkers(workersId, carriers)
    packages += amountWorkers(workers, carriers)
  }
  
  packages += amount
  return packages
}

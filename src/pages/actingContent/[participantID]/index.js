import React from 'react'
import { useRouter } from 'next/router'

export default function ActingContent () {
  const router = useRouter();
  const {participantID} = router.query;
  console.log(participantID);
  return (
    <div>{participantID}</div>
  )
}

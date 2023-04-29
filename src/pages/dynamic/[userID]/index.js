import React from 'react'
import { useRouter } from 'next/router'

export default function Dynamic () {
  const router = useRouter();
  const {userID} = router.query;
  console.log(userID);
  return (
    <div>{userID}</div>
  )
}

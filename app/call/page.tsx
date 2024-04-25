import React from 'react'
export const runtime = 'edge'

import { redirect } from 'next/navigation'

function Call() {
  redirect('https://cal.com/satpal/30min')
}

export default Call
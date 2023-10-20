import React, { useEffect, useState } from "react"
import { Image } from "../components/Image"
import axios from "axios"
require("dotenv").config()

export const Images = () => {
  const [data, setData] = useState({})
  const { URL, ACCESS_KEY } = process.env
  useEffect(() => {
    axios.get("")
  })
  return (
    <div>
      Images
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <Image />
        </div>
      </div>
    </div>
  )
}

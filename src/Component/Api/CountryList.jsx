import React, { useEffect } from 'react'
import {useEffect, useState} from 'react'
import fetchData from '../../Country'
import { useState } from 'react'


export default function CountryList() {
    const [country, setCountry] = useState([])
    const fetchCountry = async ()=>{
        try {
            const country =  await fetchData('https://restcountries.com/v3.1/all')
            setCountry(country)
            console.log(country)
        } catch (error) {
            throw new Error(error)
        }
    }
    useEffect(()=>{
        fetchCountry()

    })

  return (
    <div>
      
    </div>
  )
}


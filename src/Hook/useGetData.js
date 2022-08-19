import axios from "axios"
import { useEffect, useState } from "react";

const useGetData = () => {
    const [watherData, setWatherData] = useState();
    const [stateInfo, setStateInfo] = useState();

    const get = async () => {
        try {
            const res = await axios.get("https://api.datos.gob.mx/v1/condiciones-atmosfericas")
            setWatherData(res.data.results)
        } catch (error) {

        }
    }

    const getOne = async (id) => {
        try {
            const res = await axios.get(`https://api.datos.gob.mx/v1/condiciones-atmosfericas/${id}`)
            setStateInfo(res.data.results)
        } catch (error) {

        }
    }

    useEffect(() => {
        get()
    }, []);

    return { watherData, getOne, stateInfo }
}

export default useGetData
import React from 'react'
import { useContext, useRef} from 'react'
import { userContext } from '../Contexts/UserContext'

const UserFind () => {

    const { userList } = useContext(userContext)

    const handleSearch () => {
        
        userList.findIndex((user) => user.nickname = {user})

    }


    return(
        <>
        <div>
            <h2>Pesquise o Usuário pelo Nickname:</h2>
            <label htmlFor="User">Usuário</label>
            <input type="text" name="user" />
            <button type='submit' onClick={handleSearch}>Procurar</button>
            
        
        </div>
        
        </>
    


    )

}
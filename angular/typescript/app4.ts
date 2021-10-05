import {ConcessionariaDao} from './ConcessionariaDao'
import Concessionaria from './Concessionaria'

let dao: ConcessionariaDao = new ConcessionariaDao()
let concessionaria = new Concessionaria('', [])

dao.inserir(concessionaria)
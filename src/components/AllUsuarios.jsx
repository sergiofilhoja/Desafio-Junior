import React, { useEffect, useState } from "react";

import { 
	TableCell, 
	TableRow, 
	Table, 
	TableHead, 
	Container, 
	TableBody, 
	makeStyles,
	Button
} from "@material-ui/core";

import { getUsers, deleteUser } from "../services/api";
import { Link } from 'react-router-dom'
import NavBar from "./NavBar";

const useStyle = makeStyles({
	table: {
		marginTop: 20
	},
	thead: {
		'& > *': {
				background: '#162F72',
				color: 'white',
				fontSize: 18,
		}
	}
})

const AllUsuarios = () => {
	const [users, setUsers] = useState([]);
	const styled = useStyle();

	// Função pega todos os usuários cadastrados no db.json
	const getAllUsers = async () => {
		const response = await getUsers();
		setUsers(response.data)
	}

	// Deleta a partir do ID o usuário cadastrado
	const deletarUsuario = async (id) => {
		await deleteUser(id)
		getAllUsers()
	}

	// Escuta a chamada dos usuários, caso alterado
	useEffect(() => {
		getAllUsers();
	})

	return (
		<>
			<NavBar />
			<Container>
				<Table className={styled.table}>
					
					{/* Verificação caso não haja usuários cadastrados */}
					{ users.length === 0 ? (
						<h1
							style={{
								textAlign: 'center',
								color: '#162F72'
							}}
						>
							Não há usuarios cadastrados.
						</h1>
					)
					:
					(
						<>
							<TableHead>
								<TableRow className={styled.thead}>
									<TableCell>Nome</TableCell>
									<TableCell>Telefone</TableCell>
									<TableCell>CEP</TableCell>
									<TableCell>Endereço</TableCell>
									<TableCell>Cidade</TableCell>
									<TableCell>Estado</TableCell>
									<TableCell>País</TableCell>
									<TableCell></TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{
									users.map(user => (
										<TableRow key={user.id}>
											<TableCell>{user.name}</TableCell>
											<TableCell>{user.telefone}</TableCell>
											<TableCell>{user.cep}</TableCell>
											<TableCell>{user.endereco}</TableCell>
											<TableCell>{user.cidade}</TableCell>
											<TableCell>{user.estado}</TableCell>
											<TableCell>{user.pais}</TableCell>
											<TableCell>
													<Button 
														variant="contained" 
														color="primary" 
														style={{marginRight: 5}}
														component={Link}
														to=	{`/edit/${user.id}`}
													>
														Editar
													</Button>
													<Button 
														variant="contained" 
														color="secondary"
														onClick={() => deletarUsuario(user.id)}
													>
														Deletar
													</Button>
											</TableCell>
										</TableRow>
									))
								}
							</TableBody>
						</>
					)

					}
				</Table>
			</Container>
		</>
	)
}

export default AllUsuarios;
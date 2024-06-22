import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";

import { assistantsApi } from "@/api/assistants-api";

import { CreateAssistant, type CreateAssistantType } from "@/models/assistant";

import { CheckboxField } from "@/components/checkbox-field";
import { Main } from "@/components/main";
import { TextField } from "@/components/text-field";
import { TextareaField } from "@/components/textarea-field";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export function CreateAssistantPage() {
	const { toast } = useToast();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<CreateAssistantType>({
		resolver: zodResolver(CreateAssistant),
		defaultValues: {
			fullName: "",
			email: "",
			company: "",
			position: "",
			interests: "",
		},
	});

	// Creates the assistant.
	const onSubmit: SubmitHandler<CreateAssistantType> = async (assistant) => {
		const response = await assistantsApi.enroll(assistant);

		if (!response) {
			toast({
				title: "Error",
				description: "Ha ocurrido un error en la inscripción",
				variant: "destructive",
			});

			return;
		}

		toast({
			title: "Inscripción completada",
			description:
				"Te has inscrito con éxito, revisa tu bandeja del correo para confirmar",
		});

		reset();
	};

	return (
		<Main className="space-y-8 py-28">
			<div className="space-y-4">
				<h1 className="text-4xl font-bold">Inscripción</h1>

				<p className="text-muted-foreground">
					¡Realiza tu inscripción como asistente a nuestro webinar!
				</p>
			</div>

			<form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
				<div className="space-y-4">
					<TextField
						id="full-name"
						labelProps={{ children: "Nombre Completo" }}
						errorMessage={errors.fullName?.message}
						inputProps={{
							autoComplete: "name",
							placeholder: "ej: John Doe",
							...register("fullName"),
						}}
					/>

					<TextField
						id="email"
						labelProps={{ children: "Email" }}
						errorMessage={errors.email?.message}
						inputProps={{
							type: "email",
							autoComplete: "email",
							placeholder: "ej: johndoe@example.com",
							...register("email"),
						}}
					/>

					<TextField
						id="company"
						labelProps={{ children: "Empresa" }}
						description="Empresa en la que trabajas"
						errorMessage={errors.company?.message}
						inputProps={{
							placeholder: "ej: Google, Apple, Microsoft",
							autoComplete: "organization",
							...register("company"),
						}}
						isOptional
					/>

					<TextField
						id="position"
						labelProps={{ children: "Puesto" }}
						description="Puesto que desempeñas en la empresa"
						errorMessage={errors.position?.message}
						inputProps={{
							placeholder: "ej: Frontend Developer",
							autoComplete: "organization-title",
							...register("position"),
						}}
						isOptional
					/>

					<TextareaField
						id="interests"
						labelProps={{ children: "Intereses" }}
						description="Cuentanos sobre ti"
						errorMessage={errors.interests?.message}
						textareaProps={{
							placeholder:
								"ej: Me gusta la programación y me interesa conocer sobre el sistema por presentar",
							...register("interests"),
						}}
						isOptional
					/>

					<CheckboxField
						id="confirm-notifications"
						labelProps={{
							children:
								"Estoy de acuerdo con recibir recordatorios al correo sobre el evento",
						}}
					/>
				</div>

				<Button className="w-full" disabled={isSubmitting}>
					{isSubmitting ? <Loader2 className="mr-2 animate-spin" /> : null}

					<span>Inscribirme</span>
				</Button>
			</form>
		</Main>
	);
}

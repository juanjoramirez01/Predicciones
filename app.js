const { createApp } = Vue;

createApp({
    data() {
        return {
            activeSection: 'home',
            errors: [],
            alert: {
                message: '',
                type: ''
            },
            alertTimeout: null,
            loading: false,
            selectedValue: null,
            selectedFile: null,
            schema: null,
            schemaMap: {
                'Cáncer de Pulmón': 'pulmon.json',
                'Cáncer de Cérvix': 'cervix.json',
                'Cáncer de Mama': 'mama.json'
            },
            templates: ['Cáncer de Pulmón', 'Cáncer de Cérvix', 'Cáncer de Mama'],
            riskFactors: {
                'Cáncer de Pulmón': [
                    'Edad',
                    'Peso',
                    'Talla',
                    'Nivel educativo',
                    '¿Eres fumador o has fumado en el pasado?',
                    '¿Fumas actualmente?',
                    '¿Durante cuántos años fumaste o has fumado?',
                    '¿Cuántos cigarrillos fumas o fumabas al día, en promedio?',
                    '¿Hace cuántos años dejaste de fumar?',
                    '¿Has sido diagnosticado con algún tipo de cáncer?',
                    '¿Tienes familiares que hayan sido diagnosticados con cáncer de pulmón?',
                    '¿Has sufrido de enfermedad pulmonar obstructiva crónica (EPOC) o Asfixia?'
                ],
                'Cáncer de Cérvix': [
                    'Edad',
                    'Nivel educativo',
                    'Estado civil',
                    '¿Fuma actualmente?',
                    '¿Actualmente usa anticonceptivos orales?',
                    'Edad del primer contacto sexual en años',
                    'Número de parejas sexuales a lo largo de la vida',
                    'Ha sufrido alguna enfermedad de transmisión sexual',
                    'En los últimos 5 años ha realizado una prueba VPH',
                    '¿Cuál fue el resultado de la prueba VPH?'
                ],
                'Cáncer de Mama': [
                    '¿A qué edad tuviste tu primer período menstrual?',
                    '¿Tienes hijos?',
                    '¿Cuántos años tenías cuando tuviste tu primer hijo?',
                    '¿Te han realizado alguna vez una biopsia de mama?',
                    '¿Cuántas veces te has realizado una biopsia?',
                    '¿Se detectó un crecimiento anormal de las células en la biopsia?',
                    '¿Tiene antecedentes de cáncer de mama, carcinoma ductual in situ o carcinoma lobulillar in situ?',
                    '¿Te han realizado alguna prueba genética para diagnóstico temprano de cáncer de mama?',
                    '¿El examen fue sobre los genes BRCA1 o BRCA2?',
                    '¿Se encontró alguna mutación en estos genes?',
                    '¿Te han diagnosticado linfoma de Hodgkin?',
                    '¿Recibiste tratamiento del linfoma de Hodgkin con radioterapia en el tórax?',
                    '¿Has tenido familiares mujeres en primer grado (madre, hermanas, hijas) a quienes se les haya diagnosticado cáncer de mama?',
                    '¿Cuántos de tus familiares mujeres de primer grado (madre, hermanas, hijas) han tenido cáncer de mama?'
                ],
            },
            templatesData: {
                'Cáncer de Pulmón': [
                    {
                        "Edad": 45,
                        "Peso": 70,
                        "Talla": 165,
                        "Nivel educativo": "Profesional (graduado)",
                        "¿Eres fumador o has fumado en el pasado?": "Si",
                        "¿Has sido diagnosticado con algún tipo de cáncer?": "No",
                        "¿Tienes familiares que hayan sido diagnosticados con cáncer de pulmón?": "Si",
                        "¿Fumas actualmente?": "No",
                        "¿Durante cuántos años fumaste o has fumado?": 20,
                        "¿Cuántos cigarrillos fumas o fumabas al día, en promedio?": 15,
                        "¿Has sufrido de enfermedad pulmonar obstructiva crónica (EPOC) o Asfixia?": "No",
                        "¿Hace cuántos años dejaste de fumar?": 5
                    },
                    {
                        "Edad": 60,
                        "Peso": 80,
                        "Talla": 170,
                        "Nivel educativo": "Secundaria",
                        "¿Eres fumador o has fumado en el pasado?": "Si",
                        "¿Has sido diagnosticado con algún tipo de cáncer?": "Si",
                        "¿Tienes familiares que hayan sido diagnosticados con cáncer de pulmón?": "No",
                        "¿Fumas actualmente?": "Si",
                        "¿Durante cuántos años fumaste o has fumado?": 40,
                        "¿Cuántos cigarrillos fumas o fumabas al día, en promedio?": 20,
                        "¿Has sufrido de enfermedad pulmonar obstructiva crónica (EPOC) o Asfixia?": "Si"
                    },
                    {
                        "Edad": 30,
                        "Peso": 65,
                        "Talla": 175,
                        "Nivel educativo": "Técnica",
                        "¿Eres fumador o has fumado en el pasado?": "No",
                        "¿Has sido diagnosticado con algún tipo de cáncer?": "No",
                        "¿Tienes familiares que hayan sido diagnosticados con cáncer de pulmón?": "No"
                    },
                    {
                        "Edad": 55,
                        "Peso": 75,
                        "Talla": 160,
                        "Nivel educativo": "Primaria",
                        "¿Eres fumador o has fumado en el pasado?": "Si",
                        "¿Has sido diagnosticado con algún tipo de cáncer?": "No",
                        "¿Tienes familiares que hayan sido diagnosticados con cáncer de pulmón?": "Si",
                        "¿Fumas actualmente?": "No",
                        "¿Durante cuántos años fumaste o has fumado?": 30,
                        "¿Cuántos cigarrillos fumas o fumabas al día, en promedio?": 10,
                        "¿Has sufrido de enfermedad pulmonar obstructiva crónica (EPOC) o Asfixia?": "No",
                        "¿Hace cuántos años dejaste de fumar?": 10
                    },
                    {
                        "Edad": 40,
                        "Peso": 68,
                        "Talla": 180,
                        "Nivel educativo": "Tecnología",
                        "¿Eres fumador o has fumado en el pasado?": "No",
                        "¿Has sido diagnosticado con algún tipo de cáncer?": "Si",
                        "¿Tienes familiares que hayan sido diagnosticados con cáncer de pulmón?": "No"
                    },
                    {
                        "Edad": 40,
                        "Peso": 80,
                        "Talla": 180,
                        "Nivel educativo": "Técnica",
                        "¿Eres fumador o has fumado en el pasado?": "No",
                        "¿Has sido diagnosticado con algún tipo de cáncer?": "No",
                        "¿Tienes familiares que hayan sido diagnosticados con cáncer de pulmón?": "Si"
                    }
                ],
                'Cáncer de Cérvix': [                                                                                                                                     
                    {
                        'Edad': 30,
                        'Nivel educativo': 'Universitario',
                        'Estado civil': 'Casada',
                        "¿Fuma actualmente?": "No",
                        "¿Actualmente usa anticonceptivos orales?": "Si",
                        "Edad del primer contacto sexual en años": 19,
                        "Número de parejas sexuales a lo largo de la vida": "Entre 1 a 5",
                        "Ha sufrido alguna enfermedad de transmisión sexual": "No",
                        "En los últimos 5 años ha realizado una prueba VPH": "Si",
                        "¿Cuál fue el resultado de la prueba VPH?": "Negativa"
                    },
                    {
                        "Edad": 25,
                        "Nivel educativo": "Secundaria completa",
                        "Estado civil": "Soltera",
                        "¿Fuma actualmente?": "Si",
                        "¿Actualmente usa anticonceptivos orales?": "No",
                        "Edad del primer contacto sexual en años": 18,
                        "Número de parejas sexuales a lo largo de la vida": "Entre 1 a 5",
                        "Ha sufrido alguna enfermedad de transmisión sexual": "No",
                        "En los últimos 5 años ha realizado una prueba VPH": "No"
                    },
                    {
                        "Edad": 34,
                        "Nivel educativo": "Secundaria completa",
                        "Estado civil": "Casada",
                        "¿Fuma actualmente?": "No",
                        "¿Actualmente usa anticonceptivos orales?": "Si",
                        "Edad del primer contacto sexual en años": 19,
                        "Número de parejas sexuales a lo largo de la vida": "Entre 1 a 5",
                        "Ha sufrido alguna enfermedad de transmisión sexual": "No",
                        "En los últimos 5 años ha realizado una prueba VPH": "Si",
                        "¿Cuál fue el resultado de la prueba VPH?": "Negativa"
                    },
                    {
                        "Edad": 58,
                        "Nivel educativo": "Universitario",
                        "Estado civil": "Viuda",
                        "¿Fuma actualmente?": "Si",
                        "¿Actualmente usa anticonceptivos orales?": "No",
                        "Edad del primer contacto sexual en años": 22,
                        "Número de parejas sexuales a lo largo de la vida": "Entre 6 a 10",
                        "Ha sufrido alguna enfermedad de transmisión sexual": "Si",
                        "En los últimos 5 años ha realizado una prueba VPH": "No"
                    },
                    {
                        "Edad": 45,
                        "Nivel educativo": "Posgrado",
                        "Estado civil": "Unión Libre",
                        "¿Fuma actualmente?": "No",
                        "¿Actualmente usa anticonceptivos orales?": "Si",
                        "Edad del primer contacto sexual en años": 18,
                        "Número de parejas sexuales a lo largo de la vida": "Mas de 20 parejas",
                        "Ha sufrido alguna enfermedad de transmisión sexual": "No",
                        "En los últimos 5 años ha realizado una prueba VPH": "Si",
                        "¿Cuál fue el resultado de la prueba VPH?": "Positiva"
                    }                   
                ],
                'Cáncer de Mama': [
                    {
                        "¿A qué edad tuviste tu primer período menstrual?": "14 o más",
                        "¿Tienes hijos?": "Si",
                        "¿Cuántos años tenías cuando tuviste tu primer hijo?": "25 - 29",
                        "¿Te han realizado alguna vez una biopsia de mama?": "No",
                        "¿Tiene antecedentes de cáncer de mama, carcinoma ductual in situ o carcinoma lobulillar in situ?": "No",
                        "¿Te han realizado alguna prueba genética para diagnóstico temprano de cáncer de mama?": "No",
                        "¿Te han diagnosticado linfoma de Hodgkin?": "No",
                        "¿Has tenido familiares mujeres en primer grado (madre, hermanas, hijas) a quienes se les haya diagnosticado cáncer de mama?": "Si",
                        "¿Cuántos de tus familiares mujeres de primer grado (madre, hermanas, hijas) han tenido cáncer de mama?": "Mas de uno"
                    },
                    {
                        "¿A qué edad tuviste tu primer período menstrual?": "12 a 13",
                        "¿Tienes hijos?": "No",
                        "¿Te han realizado alguna vez una biopsia de mama?": "Si",
                        "¿Cuántas veces te has realizado una biopsia?": "2 o mas veces",
                        "¿Se detectó un crecimiento anormal de las células en la biopsia?": "No",
                        "¿Tiene antecedentes de cáncer de mama, carcinoma ductual in situ o carcinoma lobulillar in situ?": "No",
                        "¿Te han realizado alguna prueba genética para diagnóstico temprano de cáncer de mama?": "Si",
                        "¿El examen fue sobre los genes BRCA1 o BRCA2?": "Si",
                        "¿Se encontró alguna mutación en estos genes?": "No",
                        "¿Te han diagnosticado linfoma de Hodgkin?": "No",
                        "¿Has tenido familiares mujeres en primer grado (madre, hermanas, hijas) a quienes se les haya diagnosticado cáncer de mama?": "No",
                    }
                ]
            }
        };
    },

    computed: {
        riskFactorsList() {
            return this.riskFactors[this.selectedValue] || [];
        },

        alertClass() {
            return `alert alert-${this.alert.type} fs-6 my-2 text-center`;
        }
    },

    methods: {
        downloadTemplate() {
            const selectedData = this.templatesData[this.selectedValue];
            if (!selectedData) {
                this.showWarning('Por favor, seleccione una opción válida.');
                return;
            }
            try {
                const sheet = XLSX.utils.json_to_sheet(selectedData);
                const workbook = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(workbook, sheet, this.selectedValue);
                XLSX.writeFile(workbook, `plantilla_${this.selectedValue.toLowerCase().replace(/ /g, '_')}.xlsx`);
                this.showSuccess('Plantilla descargada correctamente.');
            } catch (error) {
                console.error('Error al generar el archivo:', error);
                this.showDanger('Ocurrió un error al generar la plantilla.');
            }
        },

        onFileChange(event) {
            this.selectedFile = event.target.files[0];
        },

        async saveFile() {
            this.resetValueImput();
            this.resetErrors();
            if (!this.selectedFile) {
                this.showWarning('Por favor, seleccione un archivo.');
                return;
            }
            try {
                this.loading = true;
                const fileData = await this.readFileAsArrayBuffer(this.selectedFile);
                const workbook = this.readWorkbook(fileData);
                const sheetName = workbook.SheetNames[0];
                const jsonData = this.convertSheetToJson(workbook, sheetName);
                const schemaFile = this.getSchemaFileName(sheetName);
                if (!schemaFile) {
                    this.showDanger('El esquema no fue encontrado para el archivo cargado.');
                    return;
                }

                this.schema = await this.loadSchema(schemaFile);
                if (this.schema) {
                    if (this.validateJsonAgainstSchema(jsonData, this.schema)){
                        const transformedData = this.dataTransform(jsonData, sheetName);
                        const calculatedRisk = this.massiveCalculateRisk(transformedData);
                        this.downloadResults(jsonData, calculatedRisk, sheetName);
                        this.showSuccess('Datos procesados y descargados correctamente.');
                    } else {
                        this.showDanger('Los datos no son válidos. Registro de los errores abajo.');
                    }
                } else {
                    this.showDanger('No se pudo cargar el esquema.');
                }
            } catch (error) {
                console.error('Error procesando archivo:', error);
                this.showDanger(`Error procesando archivo: ${error.message}`);
            } finally {
                this.loading = false;
                this.resetFileInput();
            }
        },

        readFileAsArrayBuffer(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (e) => resolve(e.target.result);
                reader.onerror = () => reject(new Error('Error al leer el archivo.'));
                reader.readAsArrayBuffer(file);
            });
        },

        readWorkbook(data) {
            try {
                return XLSX.read(data, { type: 'array' });
            } catch (error) {
                throw new Error('Error al leer el archivo Excel.');
            }
        },

        convertSheetToJson(workbook, sheetName) {
            const sheet = workbook.Sheets[sheetName];
            if (!sheet) {
                throw new Error(`La hoja "${sheetName}" no existe en el archivo.`);
            }
            return XLSX.utils.sheet_to_json(sheet);
        },

        getSchemaFileName(sheetName) {
            return this.schemaMap[sheetName] || null;
        },

        async loadSchema(schemaFile) {
            try {
                const response = await fetch(`./schemas/${schemaFile}`);
                return await response.json();
            } catch (error) {
                console.error('Error al cargar el esquema:', error);
                return null;
            }
        },

        translateErrorMessage(message) {
            switch (message.keyword) {
                case "type":
                    return `El tipo de dato es incorrecto, debe ser ${message.params.type}.`;
                case "required":
                    return `El campo "${message.params.missingProperty}" es obligatorio.`;
                case "minimum":
                    return `El valor debe ser como mínimo ${message.params.limit}.`;
                case "maximum":
                    return `El valor debe ser como máximo ${message.params.limit}.`;
                case "const":
                case "enum":
                    return `El valor es incorrecto, debe ser uno de los siguientes: ${message.params.allowedValues}.`;
                case "if":
                    return `No cumple con la condición del esquema.`;
                default:
                    return message;
            }
        },

        parseDataPath(dataPath) {
            const regex = /\[(\d+)\](?:\.(\w+)|\['([^']+)'\])?/;
            const match = dataPath.match(regex);
            if (match) {
                const row = 1 + parseInt(match[1]);
                const column = match[2] || match[3];
                return { row, column };
            }
            return null;
        },

        generateErrorMessage(row, column, errorTranslation) {
            if (row && column) {
                return `En la fila ${row}, columna "${column}": ${errorTranslation}`;
            } else if (row) {
                return `En la fila ${row}: ${errorTranslation}`;
            } else {
                return `Error: ${errorTranslation}`;
            }
        },

        validateJsonAgainstSchema(jsonData, schema) {
            const ajv = new Ajv({ allErrors: true });
            const validate = ajv.compile(schema);
            const valid = validate(jsonData);

            if (!valid) {
                this.errors = validate.errors.map(err => {
                    const { row, column } = this.parseDataPath(err.dataPath) || {};
                    const errorTranslation = this.translateErrorMessage(err);
                    return this.generateErrorMessage(row, column, errorTranslation);
                });
            } else {
                this.errors = [];
            }

            return valid;
        },

        calculateRisk(data) {
            const sumTotal = Object.values(data).reduce((sum, val) => sum + (+val || 0), 0);
            console.log(data);
            return 1 / (1 + Math.exp(-sumTotal));
        },
        
        massiveCalculateRisk(data) {
            return data.map(row => {
                const predictedProbability = this.calculateRisk(row);
                return (predictedProbability * 100).toFixed(2) + '%';
            });
        },        
        
        downloadResults(data, results, sheetName) {
            if (!data || !data.length) {
                throw new Error('No hay datos que descargar');
            }
            const combinedData = data.map((row, i) => ({ ...row, Resultado: results[i] }));
            const columnOrder = Object.keys(combinedData[0]);
            const reorderedData = combinedData.map(row => 
                columnOrder.reduce((acc, col) => ({ ...acc, [col]: row[col] || '' }), {})
            );
            const transformedData = reorderedData.map(row => {
                Object.keys(row).forEach(key => {
                    if (row[key] === "") row[key] = null;
                });
                return row;
            });
            const resultsData = XLSX.utils.json_to_sheet(transformedData);
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, resultsData, sheetName);
            XLSX.writeFile(wb, `resultados_${sheetName.toLowerCase().replace(/ /g, '_')}.xlsx`);
        },

        dataTransformCervix(data) {
            return data.map(item => {

                const levelEducationMap = {
                    'Universitario': -0.5404,
                    'Posgrado': -0.5404
                };
            
                const numberOfPartnersMap = {
                    'Entre 1 a 5': 0.072,
                    'Entre 6 a 10': 0.192,
                    'Entre 11 a 20': 0.372,
                    'Mas de 20 parejas': 0.612
                };

                return {
                    'Intercepto': -3.5514,
                    'Edad': item['Edad'] * 0.0590,
                    'Nivel educativo': levelEducationMap[item['Nivel educativo']] || 0,
                    'Estado civil': ['Casada', 'Unión Libre'].includes(item['Estado civil']) ? -0.0259 : 0,
                    '¿Fuma actualmente?': item['¿Fuma actualmente?'] === 'Si' ? -0.0372 : 0,
                    '¿Actualmente usa anticonceptivos orales?': item['¿Actualmente usa anticonceptivos orales?'] === 'Si' ? 0.3524 : 0,
                    'Edad del primer contacto sexual en años': item['Edad del primer contacto sexual en años'] * -0.0700,
                    'Número de parejas sexuales a lo largo de la vida': numberOfPartnersMap[item['Número de parejas sexuales a lo largo de la vida']] || 0,
                    'Ha sufrido alguna enfermedad de transmisión sexual': item['Ha sufrido alguna enfermedad de transmisión sexual'] === 'Si' ? 0.2710 : 0,
                    '¿Cuál fue el resultado de la prueba VPH?': item['¿Cuál fue el resultado de la prueba VPH?'] === 'Positiva' ? 1.5008 : item['¿Cuál fue el resultado de la prueba VPH?'] === 'Negativa' ? 0.3246 : 0
                };
            });
        },        

        dataTransformPulmon(data) {
            return data.map(item => {
                const IMC = item['Talla'] !== 0 && item['Talla'] !== undefined
                    ? ((item['Peso'] / ((item['Talla'] / 100) ** 2)) - 27) * (-0.0274194)
                    : 0;
        
                const añosFumado = item['¿Durante cuántos años fumaste o has fumado?'] !== undefined
                    ? ((item['¿Durante cuántos años fumaste o has fumado?']) - 27) * (0.0317321)
                    : 0;
        
                const cigarrillosDiarios = item['¿Cuántos cigarrillos fumas o fumabas al día, en promedio?'] !== undefined
                    ? ((200 / (item['¿Durante cuántos años fumaste o has fumado?'] * item['¿Cuántos cigarrillos fumas o fumabas al día, en promedio?'])) - 0.4021541613) * (-1.822606)
                    : 0;
        
                const añosDejadoFumar = item['¿Hace cuántos años dejaste de fumar?'] !== undefined
                    ? ((item['¿Hace cuántos años dejaste de fumar?']) - 10) * (-0.0308572)
                    : 0;
        
                return {
                    'Intercepto': -4.532506,
                    'Edad': (item['Edad'] - 62) * (0.0778868),
                    'Nivel educativo': 
                        item['Nivel educativo'] === 'Primaria' ? (1-4) * (-0.0812744) :
                        item['Nivel educativo'] === 'Secundaria' ? (2-4) * (-0.0812744) :
                        item['Nivel educativo'] === 'Técnica' ? (3-4) * (-0.0812744) :
                        item['Nivel educativo'] === 'Tecnología' ? (3-4) * (-0.0812744) :
                        item['Nivel educativo'] === 'Profesional (en curso)' ? (4-4) * (-0.0812744) :
                        item['Nivel educativo'] === 'Profesional (graduado)' ? (5-4) * (-0.0812744) :
                        item['Nivel educativo'] === 'Ninguna' ? (6-4) * (-0.0812744) : 0,
                    'IMC': IMC,
                    '¿Eres fumador o has fumado en el pasado?': -0.7434744,
                    '¿Fumas actualmente?':
                        item['¿Fumas actualmente?'] === 'Si' ? 0.2597431 : 0,
                    '¿Durante cuántos años fumaste o has fumado?': añosFumado,
                    '¿Cuántos cigarrillos fumas o fumabas al día, en promedio?': cigarrillosDiarios,
                    '¿Hace cuántos años dejaste de fumar?': añosDejadoFumar,
                    '¿Has sido diagnosticado con algún tipo de cáncer?':
                        item['¿Has sido diagnosticado con algún tipo de cáncer?'] === 'Si' ? 0.4589971 : 0,
                    '¿Tienes familiares que hayan sido diagnosticados con cáncer de pulmón?':
                        item['¿Tienes familiares que hayan sido diagnosticados con cáncer de pulmón?'] === 'Si' ? 0.587185 : 0,
                    '¿Has sufrido de enfermedad pulmonar obstructiva crónica (EPOC) o Asfixia?':
                        item['¿Has sufrido de enfermedad pulmonar obstructiva crónica (EPOC) o Asfixia?'] === 'Si' ? 0.3553063 : 0
                };
            });
        },
        
        dataTransform(data, sheetname) {
            switch (sheetname) {
                case 'Cáncer de Cérvix':
                    return this.dataTransformCervix(data);
                case 'Cáncer de Pulmón':
                    return this.dataTransformPulmon(data);
                case 'Cáncer de Mama':
                    return null;
                default:
                    return data;
            }
        },

        triggerAlert(type, message) {
            if (this.alertTimeout) {
                clearTimeout(this.alertTimeout);
            }
            this.alert.message = message;
            this.alert.type = type;
            this.alertTimeout = setTimeout(() => {
                this.alert.message = '';
                this.alert.type = '';
            }, 3000);
        },
        
        showDanger(message) {
            this.triggerAlert('danger', message);
        },

        showWarning(message) {
            this.triggerAlert('warning', message);
        },

        showSuccess(message) {
            this.triggerAlert('success', message);
        },

        resetValueImput() {
            this.selectedValue = null;
        },

        resetErrors() {
            this.errors = [];
        },

        resetFileInput() {
            this.selectedFile = null;
            document.getElementById('fileInput').value = null;
        },
        
        cancelUpload() {
            this.showWarning('Carga cancelada.');
            this.resetFileInput();
        }
    }
}).mount('#app');
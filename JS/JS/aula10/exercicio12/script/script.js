const exercicio = (palavra, indiceCaractere)=>{
    console.log(`Esta palavra tem ${palavra.length} caracteres`);
    console.log(`A palavra ${palavra} ficou ${palavra.toUpperCase()}`);
    console.log(`A letra ${palavra[indiceCaractere]} é o ${indiceCaractere}º caracter da palavra ${palavra.toUpperCase()}`);
    console.log(`${palavra} ficou ${(palavra.replace(palavra[indiceCaractere], "x").toUpperCase())}`);
}
exercicio("marcelo", 2);
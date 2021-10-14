import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  etFaixa = function (imc) {
    var faixa = "";
    if (imc < 17) {
      faixa = "Muito abaixo do peso";
    } else if (imc >= 17 && imc <= 18.49) {
      faixa = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.99) {
      faixa = "Peso normal";
    } else if (imc >= 25 && imc <= 29.99) {
      faixa = "Acima do peso";
    } else if (imc >= 30 && imc <= 34.99) {
      faixa = "Obesidade I";
    } else if (imc >= 35 && imc <= 39.99) {
      faixa = "Obesidade II (severa)";
    } else if (imc > 40) {
      faixa = "Obesidade III (mórbida)";
    }

    return faixa;
  };
};
/*
Angular.module('calculoImcApp')
.service('calculoImc', function() {

  //cálculo do IMC
  this.calcular = function (peso, altura) {
    //Fórmula do IMC: peso / (altura x altura)
    var imc = peso / (altura * altura);
    return imc;
  };

  //pega a faixa em que o imc corresponde
  this.getFaixa = function (imc) {
    var faixa = "";
    if (imc < 17) {
      faixa = "Muito abaixo do peso";
    } else if (imc >= 17 && imc <= 18.49) {
      faixa = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.99) {
      faixa = "Peso normal";
    } else if (imc >= 25 && imc <= 29.99) {
      faixa = "Acima do peso";
    } else if (imc >= 30 && imc <= 34.99) {
      faixa = "Obesidade I";
    } else if (imc >= 35 && imc <= 39.99) {
      faixa = "Obesidade II (severa)";
    } else if (imc > 40) {
      faixa = "Obesidade III (mórbida)";
    }

    return faixa;
  };
});
*/
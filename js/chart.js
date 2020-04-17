google.charts.load('current', {'packages':['corechart', 'table', 'gauge']});

google.charts.setOnLoadCallback(drawVisualization);
google.charts.setOnLoadCallback(drawPieChart);
google.charts.setOnLoadCallback(drawTable);
google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);
google.charts.setOnLoadCallback(drawChart3);
google.charts.setOnLoadCallback(drawChartGauge1);

//Combo Chart
function drawVisualization() {

    var data = google.visualization.arrayToDataTable([
        ['Mês', 'Receita', { role: 'annotation' }, 'Custos', { role: 'annotation' }, 'Despesas'],
        ['Jan', 943, '943', 410, '410', 333],
        ['Fev', 772, '772', 301, '301', 359],
        ['Mar', 809, '809', 807, '807', 500],
        ['Abr', 569, '569', 608, '608', 372],
        ['Mai', 917, '917', 306, '306', 304],
        ['Jun', 1200,'1200', 547, '547', 416],
        ['Jul', 780, '780', 849, '849', 402],
        ['Ago', 801, '801', 933, '933', 402],
        ['Set', 684, '684', 907, '907', 380],
        ['Out', 1071, '1071', 476, '476', 411],
        ['Nov', 1184, '1184', 594, '594', 345],
        ['Dez', 1143, '1143', 902, '902', 483]
    ]);

    var options = {
      title : 'Receita, Custos e Despesas por Mês',
      seriesType: 'bars',
      series: {2: {type: 'line'}},
      height: 250,
      width: 1200,
      legend: {position: 'right'}
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div0'));
    chart.draw(data, options);
}

//Pie Chart
function drawPieChart() {

    var data = google.visualization.arrayToDataTable([
      ['Receita', 'Valor'],
      ['Carro A', 8],
      ['Carro B', 4],
      ['Moto A', 3],
      ['Moto B', 2]
    ]);

    var options = {
      title: 'Receita (detalhamento)',
      height: 250,
      width: 450
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}

//Table
function drawTable() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Modelo');
  data.addColumn('string', 'Categoria');
  data.addColumn('number', 'Receita');
  data.addColumn('number', 'Custos');
  data.addColumn('number', 'Lucro bruto');
  data.addColumn('boolean', 'Meta');
  data.addRows([
    ['Carro A','Linha A', {v: 10000, f: 'R$ 10.000'}, {v: -7000, f: '- R$ 7.000'}, {v: 3000, f: 'R$ 3.000' }, true],
    ['Carro B','Linha B', {v:  8000, f: 'R$  8.000'}, {v: -8500, f: '- R$ 8.500'}, {v: -500, f: '- R$  500'}, false],
    ['Moto  A','Linha A', {v: 12500, f: 'R$ 12.500'}, {v: -7500, f: '- R$ 7.500'}, {v: 5000, f: 'R$ 5.000' }, true],
    ['Moto  B','Linha B', {v:  7000, f: 'R$  7.000'}, {v: -6000, f: '- R$ 6.000'}, {v: 1000, f: 'R$  1.000'}, false]
  ]);

  var table = new google.visualization.Table(document.getElementById('table_div'));

  table.draw(data, {showRowNumber: true, width: 500, height: 250});
}

//Bar Chart 1
function drawChart1() {

    var data = google.visualization.arrayToDataTable([
        ['Element', 'Valor', { role: 'style' }, { role: 'annotation' } ],
        ['Salário', 56.12, 'color: #01579b', '40.7%'],
        ['Impostos', 35.02, 'color: #01579b', '25.4%'],
        ['Transporte', 25.75, 'color: #01579b', '16.5%'],
        ['Aluguel', 5.10, 'color: #01579b', '3.7%'],
        ['Segurança', 3.52, 'color: #01579b', '2.6%'],
        ['Outros', 15.37, 'color: #01579b', '11.1%']
    ]);

    var options = {'title':'Custos Fixos (Top 5)',
                    'width':400,
                    'height':300,
                    legend: { position: "none" }};

    var chart = new google.visualization.BarChart(document.getElementById('chart_div1'));
    chart.draw(data, options);
}

//Bar Chart 2
function drawChart2() {

    var data = google.visualization.arrayToDataTable([
    ['Element', 'Valor', { role: 'style' }, { role: 'annotation' } ],
    ['Insumos', 34.30, 'color: #4a148c', '23.9%'],
    ['Impostos', 30.44, 'color: #4a148c', '21.2%'],
    ['Manutenção', 27.75, 'color: #4a148c', '19.3%'],
    ['Luz', 22.40, 'color: #4a148c', '15.6%'],
    ['Água', 13.74, 'color: #4a148c', '9.6%'],
    ['Outros', 15.10, 'color: #4a148c', '10.5%']
    ]);

    var options = {'title':'Custos Variáveis (Top 5)',
                    'width':400,
                    'height':300,
                    legend: { position: "none" }};

    var chart = new google.visualization.BarChart(document.getElementById('chart_div2'));
    chart.draw(data, options);
}

//Bar Chart 3
function drawChart3() {

    var data = google.visualization.arrayToDataTable([
        ['Element', 'Valor', { role: 'style' }, { role: 'annotation' } ],
        ['Salários', 36.40, 'color: #004d40', '31.9%'],
        ['Benefícios', 25.95, 'color: #004d40', '22.8%'],
        ['Impostos', 18.75, 'color: #004d40', '16.4%'],
        ['Vale refeição', 15.40, 'color: #004d40', '13.5%'],
        ['Vale transporte', 11.40, 'color: #004d40', '10.0%'],
        ['Outros', 6.10, 'color: #004d40', '5.4%']
    ]);

    var options = {'title':'Despesas (Top 5)',
                    'width':400,
                    'height':300,
                    legend: { position: "none" }};

    var chart = new google.visualization.BarChart(document.getElementById('chart_div3'));
    chart.draw(data, options);
}

//Gauge Chart 1
function drawChartGauge1() {

  var data = google.visualization.arrayToDataTable([
    ['Label', 'Valor'],
    ['Receita', 80],
    ['Custo Fixo', 55],
    ['Custo Var.', 65],
    ['Despesas', 65],
  ]);

  var options = {
    width: 600, height: 250,
    redFrom: 90, redTo: 100,
    yellowFrom:75, yellowTo: 90,
    minorTicks: 4
  };
  
  var chart = new google.visualization.Gauge(document.getElementById('chart_div_gauge'));
  chart.draw(data, options);
}
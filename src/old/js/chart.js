google.charts.load('current', {'packages':['corechart', 'table', 'gauge']});

google.charts.setOnLoadCallback(drawChartGauge);
google.charts.setOnLoadCallback(drawVisualization);
google.charts.setOnLoadCallback(drawPieChart);
google.charts.setOnLoadCallback(drawTable);
google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);
google.charts.setOnLoadCallback(drawChart3);

//Gauge Chart 1 **ajustar alinhamento**
function drawChartGauge() {

  const data = google.visualization.arrayToDataTable([
    ['Label', 'Valor'],
    ['Receita', 80],
    ['Custo Fixo', 55],
    ['Custo Var.', 65],
    ['Despesas', 65],
  ]);

  const options = {
    width: 600, height: 250,
    // greenFrom: 0, greenTo: 75,
    yellowFrom: 75, yellowTo: 90,
    yellowColor: '#ffee58',
    redFrom: 90, redTo: 100,
    redColor: '#f44336',
    minorTicks: 4
  };
  
  const chart = new google.visualization.Gauge(document.getElementById('chart_div_gauge'));
  chart.draw(data, options);
}

//Combo Chart **ajustar alinhamento**
function drawVisualization() {

    const data = google.visualization.arrayToDataTable([
        ['Mês', 'Receita', { role: 'annotation' }, { role: 'style' }, 'Custos', { role: 'annotation' }, { role: 'style' }, 'Despesas'],
        ['Jan', 943, '943', 'color: #2196f3', 410, '410', 'color: #f44336', 333],
        ['Fev', 772, '772', 'color: #2196f3', 301, '301', 'color: #f44336', 359],
        ['Mar', 809, '809', 'color: #2196f3', 807, '807', 'color: #f44336', 500],
        ['Abr', 569, '569', 'color: #2196f3', 608, '608', 'color: #f44336', 372],
        ['Mai', 917, '917', 'color: #2196f3', 306, '306', 'color: #f44336', 304],
        ['Jun', 1200,'1200', 'color: #2196f3', 547, '547', 'color: #f44336', 416],
        ['Jul', 780, '780', 'color: #2196f3', 849, '849', 'color: #f44336', 402],
        ['Ago', 801, '801', 'color: #2196f3', 933, '933', 'color: #f44336', 402],
        ['Set', 684, '684', 'color: #69f0ae', 907, '907', 'color: #ff9800', 380],
        ['Out', 1071, '1071', 'color: #69f0ae', 476, '476', 'color: #ff9800', 411],
        ['Nov', 1184, '1184', 'color: #69f0ae', 594, '594', 'color: #ff9800', 345],
        ['Dez', 1143, '1143', 'color: #69f0ae', 902, '902', 'color: #ff9800', 483]
    ]);

    const options = {
      title: 'Receita, Custos e Despesas por Mês',
      seriesType: 'bars',
      series: {2: {type: 'line'}},
      height: 250,
      width: 1200,
      legend: {position: 'bottom'},
      fontSize: 12,
      fontName:'Helvetica, sans-serif',
      colors: ['#2196f3', '#f44336','#e65100']
    };

    const chart = new google.visualization.ComboChart(document.getElementById('chart_div0'));
    chart.draw(data, options);
}

//Pie Chart **ajustar alinhamento**
function drawPieChart() {

    const data = google.visualization.arrayToDataTable([
      ['Receita', 'Valor'],
      ['Carro A', 8],
      ['Carro B', 4],
      ['Moto A', 3],
      ['Moto B', 3]
    ]);

    const options = {
      title: 'Receita (detalhamento)',
      fontSize: 12,
      fontName:'Helvetica, sans-serif',
      height: 250,
      width: 450,
      slices: {
        0: { color: '#00796b' },
        1: { color: '#009688' },
        2: { color: '#4db6ac' },
        3: { color: '#b2dfdb' }
      }
    };

    const chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}

//Table **ajustar alinhamento**
function drawTable() {
  const data = new google.visualization.DataTable();
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

  const table = new google.visualization.Table(document.getElementById('table_div'));

  table.draw(data, {showRowNumber: true, width: 500, height: 250});
}

//Bar Chart 1
function drawChart1() {

    const data = google.visualization.arrayToDataTable([
        ['Element', 'Valor', { role: 'style' }, { role: 'annotation' } ],
        ['Salário', 56.12, 'color: #2196f3', '40.7%'],
        ['Impostos', 35.02, 'color: #2196f3', '25.4%'],
        ['Transporte', 25.75, 'color: #2196f3', '16.5%'],
        ['Aluguel', 5.10, 'color: #2196f3', '3.7%'],
        ['Segurança', 3.52, 'color: #2196f3', '2.6%'],
        ['Outros', 15.37, 'color: #2196f3', '11.1%']
    ]);

    const options = {'title':'Custos Fixos (Top 5)',
                    fontSize: 12,
                    fontName:'Helvetica, sans-serif',
                    'width':400,
                    'height':300,
                    legend: { position: "none" }};

    const chart = new google.visualization.BarChart(document.getElementById('chart_div1'));
    chart.draw(data, options);
}

//Bar Chart 2
function drawChart2() {

    const data = google.visualization.arrayToDataTable([
    ['Element', 'Valor', { role: 'style' }, { role: 'annotation' } ],
    ['Insumos', 34.30, 'color: #f44336', '23.9%'],
    ['Impostos', 30.44, 'color: #f44336', '21.2%'],
    ['Manutenção', 27.75, 'color: #f44336', '19.3%'],
    ['Luz', 22.40, 'color: #f44336', '15.6%'],
    ['Água', 13.74, 'color: #f44336', '9.6%'],
    ['Outros', 15.10, 'color: #f44336', '10.5%']
    ]);

    const options = {'title':'Custos Variáveis (Top 5)',
                    fontSize: 12,
                    fontName:'Helvetica, sans-serif',
                    'width':400,
                    'height':300,
                    legend: { position: "none" }};

    const chart = new google.visualization.BarChart(document.getElementById('chart_div2'));
    chart.draw(data, options);
}

//Bar Chart 3
function drawChart3() {

    const data = google.visualization.arrayToDataTable([
        ['Element', 'Valor', { role: 'style' }, { role: 'annotation' } ],
        ['Salários', 36.40, 'color: #009688', '31.9%'],
        ['Benefícios', 25.95, 'color: #009688', '22.8%'],
        ['Impostos', 18.75, 'color: #009688', '16.4%'],
        ['Vale refeição', 15.40, 'color: #009688', '13.5%'],
        ['Vale transporte', 11.40, 'color: #009688', '10.0%'],
        ['Outros', 6.10, 'color: #009688', '5.4%']
    ]);

    const options = {'title':'Despesas (Top 5)',
                    fontSize: 12,
                    fontName:'Helvetica, sans-serif',
                    'width':400,
                    'height':300,
                    legend: { position: "none" }};

    const chart = new google.visualization.BarChart(document.getElementById('chart_div3'));
    chart.draw(data, options);
}


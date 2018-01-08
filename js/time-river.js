var myChart = echarts.init(document.getElementById("main"));	
option = {

    tooltip: {
        trigger: 'axis',
        //坐标轴指示器
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: 'rgba(0,0,0,0.2)',
                width: 1,
                type: 'solid'
            }
        }
    },

    legend: {
        data: [{name:'literature',icon:'circle',textStyle: {color: 'white'}}, 
        {name:'fashion',icon:'circle',textStyle: {color: 'white'}}, 
        {name:'culture',icon:'circle',textStyle: {color: 'white'}},
        {name:'life',icon:'circle',textStyle: {color: 'white'}}, 
        {name:'sdministered',icon:'circle',textStyle: {color: 'white'}}, 
        {name:'science',icon:'circle',textStyle: {color: 'white'}}]
    },

    singleAxis: {
        top: 50,
        bottom: 50,
        axisTick: {},
        axisLabel: {},
        type: 'value',
        min: 2000,
        max: 2015,
        splitNumber: 16,
        axisPointer: {
            animation: true,
            label: {
                show: true
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                opacity: 0.2
            }
        }
    },

    series: [
        {
            type: 'themeRiver',
            itemStyle: {
                emphasis: {
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.8)'
                }
            },
            data: 
            [['2000',10,'literature'],['2001',15,'literature'],['2002',35,'literature'],
            ['2003',38,'literature'],['2004',22,'literature'],['2005',16,'literature'],
            ['2006',7,'literature'],['2007',2,'literature'],['2008',17,'literature'],
            ['2009',33,'literature'],['2010',40,'literature'],['2011',32,'literature'],
            ['2012',26,'literature'],['2013',35,'literature'],['2014',40,'literature'],
            ['2015',32,'literature'],
            
            ['2000',35,'fashion'],['2001',36,'fashion'],['2002',37,'fashion'],
            ['2003',22,'fashion'],['2004',24,'fashion'],['2005',26,'fashion'],
            ['2006',34,'fashion'],['2007',21,'fashion'],['2008',18,'fashion'],
            ['2009',45,'fashion'],['2010',32,'fashion'],['2011',35,'fashion'],
            ['2012',30,'fashion'],['2013',28,'fashion'],['2014',27,'fashion'],
            ['2015',26,'fashion'],
            
            ['2000',35,'culture'],['2001',36,'culture'],['2002',37,'culture'],
            ['2003',22,'culture'],['2004',24,'culture'],['2005',26,'culture'],
            ['2006',34,'culture'],['2007',21,'culture'],['2008',18,'culture'],
            ['2009',45,'culture'],['2010',32,'culture'],['2011',35,'culture'],
            ['2012',30,'culture'],['2013',28,'culture'],['2014',27,'culture'],
            ['2015',26,'culture'],
            
            ['2000',35,'life'],['2001',36,'life'],['2002',37,'life'],
            ['2003',22,'life'],['2004',24,'life'],['2005',26,'life'],
            ['2006',34,'life'],['2007',21,'life'],['2008',18,'life'],
            ['2009',45,'life'],['2010',32,'life'],['2011',35,'life'],
            ['2012',30,'life'],['2013',28,'life'],['2014',27,'life'],
            ['2015',26,'life'],
            
            ['2000',35,'sdministered'],['2001',36,'sdministered'],['2002',37,'sdministered'],
            ['2003',22,'sdministered'],['2004',24,'sdministered'],['2005',26,'sdministered'],
            ['2006',34,'sdministered'],['2007',21,'sdministered'],['2008',18,'sdministered'],
            ['2009',45,'sdministered'],['2010',32,'sdministered'],['2011',35,'sdministered'],
            ['2012',30,'sdministered'],['2013',28,'sdministered'],['2014',27,'sdministered'],
            ['2015',26,'sdministered'],
            
            ['2000',21,'science'],['2001',25,'science'],['2002',27,'science'],
            ['2003',23,'science'],['2004',24,'science'],['2005',21,'science'],
            ['2006',35,'science'],['2007',39,'science'],['2008',40,'science'],
            ['2009',36,'science'],['2010',33,'science'],['2011',43,'science'],
            ['2012',40,'science'],['2013',34,'science'],['2014',28,'science'],
            ['2015',26,'science']]
        }
    ]
};
myChart.setOption(option);
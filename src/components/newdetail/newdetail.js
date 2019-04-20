/** Created by wanan on 2019-03-16
 *作者:wanan
 */
import React from "react";
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom'

require(`./newdetail.css`);

class ty_newdetail extends React.Component{
    state = {
        current: 'Newdetail',
    }
    render(){
        return(
            <div className="newdetail">
                <nav>
                    <img src={require("../../assets/img/about/anli1.jpg")}  alt=""/>
                </nav>
                <section>
                  <h3>省政府办公厅江苏省环境基础设施三年建设方案</h3>
                  <p className="time">日期：2019</p>
                  <article>江苏省环境基础设施三年
                    建设方案（2018－2020年）
                    环境基础设施是打好污染防治攻坚战的重要支撑，是改善城乡生态环境质量的基本保障。长期以来，我省环境基础设施建设滞后，存在废弃物收集处置能力不足、运营监管不到位等突出问题，难以满足全省生态环境质量持续改善的需要。为贯彻落实党中央、国务院和省委、省政府关于打好污染防治攻坚战的重要决策部署，加快推进环境基础设施重点工程项目建设，提高设施运行效率，结合我省实际，制定本方案。

                    一、总体要求

                    （一）指导思想。

                    以习近平新时代中国特色社会主义思想为指导，深入贯彻落实习近平总书记对江苏工作的系列重要指示精神，牢固树立“绿水青山就是金山银山”的理念，把环境基础设施建设作为改善生态环境质量的重要举措，坚持问题导向，以城乡污水处理、工业废水处理、垃圾处理、危险废物利用处置、污泥处理处置与资源化利用、清洁能源供应及园区监测监控能力建设为重点，加快补齐环境基础设施短板，促进环境基础设施增量、提质、增效，显著提升全省生态环境治理能力，为打好污染防治攻坚战、高水平全面建成小康社会奠定坚实基础。

                    （二）基本原则。

                    1．统筹规划、分步实施。充分认识环境基础设施的系统性、整体性，结合长江大保护、产业转型升级等实际需求，坚持先规划、后建设，有序推进环境基础设施建设，使其既满足当前一段时间的需要，又能为未来发展预留空间。针对不同领域，坚持问题导向与目标导向相结合，不断增强环境基础设施的承载能力和辐射作用。

                    2．补齐短板、共建共享。重点加大对环境基础设施短板的建设力度，保障环境基础设施有效供给。倡导集约节约和共建共享理念，鼓励各类污染物协同治理，鼓励采取产业园区选址建设模式，形成一体化项目群，探索跨区域环境基础设施项目建设，实现一定区域内共建共享。

                    3．加强监管、提质增效。优先加强涉及城乡稳定发展的环境基础设施建设，着力提高环境基础设施应对各种风险的能力，加强环境基础设施运营管理，提高设施运行效率和设施服务水平，保障城市及园区健康运行。

                    4．创新机制、多管齐下。将环境基础设施建设作为深化环境保护工作的重要抓手，针对环境基础设施的基础性、公益性特征，建立完善高效的投入机制、市场竞争的价格机制、开放共享的运行及管理制度。拓宽资金来源渠道，鼓励社会资本参与环境基础设施的投资、建设与运营，深化环境基础设施的供给方式改革。

                    （三）建设目标。

                    到2020年，全省基本建成布局完整、运行高效、支撑有力的环境基础设施体系，为打好污染防治攻坚战、全面推动江苏高质量发展走在前列提供强有力的支撑。

                    ——城乡生活污水处理目标。到2020年，建制镇污水处理设施实现全覆盖，全面推进城镇雨污分流管网建设，新增污水管网3000公里，改造污水管网600公里。加快农村环境基础设施建设，苏南有条件的地区每个行政村建有生活污水处理设施，苏中苏北地区60%的行政村建有生活污水处理设施及配套管网。加快推进全省城镇污水处理监管信息平台建设，完成省级监管平台建设。

                    ——工业废水处理目标。新增园区配套污水处理厂废水处理能力30万吨/日以上，配套建设工业污水处理厂的园区超过100个。化工园区“一企一管”实现全覆盖并完善相应监测监控设施。检修和完善园区地下雨污管网，工业园区雨污实现彻底分流。建设统一的园区污水处理厂管理平台，对全省园区污水处理厂进行全过程智慧监管并实现联网。

                    ——生活垃圾收运处理目标。到2020年，新增生活垃圾无害化处理能力2万吨/日，全省城乡生活垃圾无害化处理率达到98%以上，除按规划实施统筹处理的城市外，县级以上城市实现“垃圾不出县”，生活垃圾焚烧处理能力占无害化处理总能力的80%。设区市建成区生活垃圾分类设施覆盖率达到70%，其他城市建成区生活垃圾分类设施覆盖率达到60%。推进新一轮农村环境综合整治工作，把江苏打造成全国农村环境综合整治示范区。

                    ——危险废物利用处置目标。到2020年，各设区市和重点地区危险废物处置能力与产生种类、数量基本匹配，处置设施布局趋于合理，处置能力不足问题得到有效缓解，全省基本建立起较为完善的危险废物处置体系。其中，工业危险废物集中处置能力较2017年新增85万吨，年总处置能力达到180万吨以上。

                    ——污泥利用处置目标。加快推进污泥处理处置设施建设，2020年底前，县（市）实现永久性城镇污泥处理处置设施全覆盖，新增处理处置能力1800吨/日（以含水率80%计）以上，无害化处理处置率达到100%。

                    ——清洁能源供应能力目标。到2020年，全省天然气发电装机规模达到2000万千瓦，煤炭消费总量比2016年减少3200万吨，非化石能源占一次能源消费比重达到11%，园区清洁能源供应保障能力得到提升。

                    ——监测监控能力建设目标。到2020年，建成全省化工园区环境质量自动监测站网，建立化工园区自动监控体系建设的规范和标准，建设全省化工园区数字化采集系统。构建工业园区“一园一档”平台，2019年底前与省级“一园一档”环境信息管理平台联网。

                    二、主要任务

                    （一）完善生活污水处理设施，促进水环境质量提升。

                    1．加强城镇污水处理设施及配套管网建设。

                    切实加强城镇污水处理设施及配套管网建设，实现城镇污水处理设施建设由“规模增长”向“提质增效”转变，由“重水轻泥”向“泥水并重”转变，全面提升我省城镇污水处理设施的保障能力和服务水平。

                    （1）推进污水管网建设，完善污水收集系统。

                    加大城镇污水管网建设力度。优先解决已建城镇污水处理设施配套管网不足问题，强化黑臭水体沿岸的污水截流、收集和处理，遵循配套管网建设适度超前的原则，推进新建污水处理设施和配套管网同步设计、同步建设、同步投运，进一步提高污水收集率，充分发挥污水处理设施效能，到2020年新增污水管网3000公里。

                    积极推进城镇雨污分流改造。原有雨污合流管网在清淤、疏通后可作为雨水管，并新建污水管道。暂不具备改造条件的地区，通过建设调蓄设施、增大截流倍数等措施，减少雨天污水溢流污染。到2020年完成老旧管网及合流制管网改造1500公里。

                    加强管网日常管理与养护工作。全面排查污水管网错接、乱接、混接、老化、破损等问题，定期开展管网隐患排查及清淤疏通工作，提高养护装备水平，引入现代化管养技术，切实落实管养要求和管养标准。

                    （2）加强污水处理设施建设，提高运营管理水平。

                    依照城乡统筹与区域协调原则，进一步推进城镇污水处理设施建设，优化污水处理设施布局，2018－2020年，全省新增城镇污水处理能力100万吨/日以上，苏中、苏北地区加快实现建制镇污水处理设施全覆盖。加强城镇生活污水处理厂再生水回用设施建设，加大再生水利用政策扶持力度，加快引导工业企业优先使用再生水。

                    深入推进城镇生活污水处理设施提标改造。太湖流域地区按照《太湖地区城镇污水处理厂及重点工业行业主要水污染物排放限值》（DB32/1072－2018）积极推进污水处理厂在一级A排放标准的基础上实行氮磷特别排放限值。到2020年，太湖流域城镇污水处理厂在一级A排放标准基础上完成再提标。充分利用污水处理厂周边可利用土地，建设人工湿地等生态净化设施，实现尾水经生态过滤后排放。

                    加强船舶生活污水收集处理。推进船舶生活污水达标排放或收集上岸处理，禁止直排入水。加快港口船舶生活污水岸上收集处理设施建设，实施400总吨以下内河运输货船生活污水存储或处理设施改造，建设船舶污染物流动收集船，实现京杭运河等主要航道流动收集全覆盖，有条件的港口码头要统筹规划建设船舶生活污水公共上岸点并配套管网，暂时不具备条件的，应当配备船舶生活污水流动接收车或设施。

                    提升运营技术水平，提高服务能力。小型污水处理厂逐步提升运行管理水平，逐步引入现代化运行管理技术，提升自动化运行水平，提高整体运行保障能力。引入信息化管理，利用大数据、互联网+等技术提高污水处理系统建设的科学性与污染削减效益，全面提高行业管理水平，利用APP等移动互联互动技术，提升污水处理综合服务水平。

                    提升污水处理信息化管理能力。加快推进全省城镇污水处理系统监管信息平台建设，强化管网信息化管理能力。严格进水水质管控，提高养护队伍配备标准，定期开展管网运行工况检测与检查，及时动态维护管网信息。

                    2．有序推进村庄生活污水处理。

                    根据农村不同区位条件、村庄人口聚集程度、污水产生规模，因地制宜采用污染治理与资源利用相结合、工程措施与生态措施相结合、集中与分散相结合的建设模式和处理工艺。推动城镇污水管网向周边村庄延伸覆盖。优先整治重要饮用水水源地周边和水质需改善控制单元内的村庄生活污水。积极推广低成本、低能耗、易维护、高效率的污水处理技术，鼓励采用生态处理工艺。提高农村污水处理设施管网入户率，加强生活污水源头减量和尾水回收利用。鼓励各地探索工程总承包等形式，优选专业企业承担村庄生活污水处理设施建设与运行维护，强化县域内农村生活污水治理规模化建设、专业化管护、一体化推进。

                    （二）强化工业废水全处理，确保稳定达标排放。

                    1．完善工业废水处理标准体系建设。

                    构建针对特征污染物管控的工业废水处理新模式，按照《关于进一步加强化工园区水污染治理的通知》（苏环办〔2017〕383号）的相关要求，将工业废水特征污染物的管控推广至省内所有工业园区，统筹建设园区企业废水特征污染物名录库，强化园区特征污染物监测能力建设，依据特征污染物的管控要求完善园区废水接管限值；同步修订完善和更新工业园区污水处理厂相关接管限值、排放标准和收费依据，按照园区所在地理位置、敏感性、园区规模和产业定位区分，建立健全标准，并提出差异化管理要求，具体实施分类施策。

                    2．提升园区配套污水处理厂处理能力。

                    强化园区配套污水处理厂建设，工业废水超过1万吨/日的园区，原则上应单独建设配套的工业污水处理厂。工业废水接管量超过20%的城镇污水处理厂，强制开展特征污染物的管控，开展一批处理工艺改造工程，配套相应的特征污染物处理工艺并强化监测。新建冶金、电镀、化工、印染、原料药制造等工业企业（有工业废水处理资质且出水达到国家标准的原料药制造企业除外）排放的含重金属或难以生化降解废水，以及有关工业企业排放的高盐废水，一律不得接入城镇生活污水处理设施。评估现有接入城镇污水处理厂的工业废水对设施出水的影响，导致出水不能稳定达标的要限期退出。

                    3．强化园区配套雨污水管网建设。

                    针对有化工定位的工业园区，推行“一企一管，明（专）管排放”，“一企一管”覆盖率达到100%，并按照要求配套相应常规指标、特征污染物在线监测设施、视频监控设施和水质反馈泵阀联动设施，逐步在电镀、印染等园区开展“一企一管”系统试点建设。强化现有园区管网的雨污清污分流规范化改造，加强园区初期雨水收集处理，全面实现雨污清污分流。梳理并完善园区现有雨污管网资料，完成所有工业园区管网的疏通和检修，有条件的园区开展综合管廊建设。

                    4．开展工业污水处理设施信息化管理系统建设。

                    加快工业园区污水处理厂信息系统建设，开展工业园区污水处理厂全过程管控和智慧管控。统一建立工业园区污水处理厂管理平台，同步纳入企业排放端、园区污水管网和园区污水处理厂所有监控点，将所有园区污水处理厂相应进出水指标、特征污染物管控、工况监控、二次污染控制等相关数据和监控图像进行集成和集中管理，实现所有省内工业园区污水处理厂的联网监控。

                    5．推行工业污水处理厂尾水中水回用。

                    积极开展尾水深度处理和再利用，通过人工湿地、生态滤池等方式，对工业园区污水处理厂出水进行过滤处理，提高尾水排放的稳定性。鼓励开展工业园区污水处理厂尾水中水回用，以实现中水回用的多元化应用为目的，有效降低中水回用的成本，增加中水回用的效益。统筹资金安排，制定相关激励政策，保障中水回用的实效。

                    （三）推进垃圾收运处理设施建设，提升资源化利用水平。

                    1．继续推进城镇生活垃圾无害化处理设施建设。

                    继续大力推进生活垃圾焚烧厂和“组保洁、村收集、镇转运、市县集中处理”的生活垃圾收运体系建设，重点推进苏北地区生活垃圾焚烧厂的建设，加强对苏北地区垃圾焚烧厂址、工艺、装备等选择的指导，积极探索相邻区域生活垃圾处理设施共建共享模式，切实提升区域生活垃圾“减量化、资源化、无害化”能力。强化餐厨废弃物、建筑垃圾、农贸市场及园林绿化等有机易腐垃圾资源化利用与无害化处理设施建设，加快构建与终端处理设施相匹配的生活垃圾分类收运体系，切实提高全省城乡生活垃圾收运处理能力和水平。加快港口船舶生活垃圾接收设施建设，并与市政公共转运处置设施做好衔接。到2020年，新增生活垃圾无害化处理能力2万吨/日。

                    2．加强生活垃圾处理设施运行监管，确保稳定达标排放。

                    督促指导全省生活垃圾处理运营单位进一步落实规范化管理措施，严格执行国家和省有关技术规范和操作规程，制定生活垃圾处理厂（场）各项污染排放指标自查或第三方监测计划，切实加强对现场作业及监管人员的业务培训，提高运行管理水平。加快推进生活垃圾焚烧厂信息化、智能化监管，实现垃圾焚烧全过程实时监控。严格落实“装树联”相关要求，逐步实现污染物排放数据信息公开。强化焚烧处理过程中产生的烟气、飞灰、渗滤液等处置，避免产生“二次污染”。加强已封场垃圾填埋场后续管理和渗滤液监控，防止污染地下水。运行船舶生活垃圾接收、转运、处置监管联单制度，加强部门联合监管，督促船舶生活垃圾送交上岸集中处理。

                    3．加强考核评价，鼓励集中布局，有效化解“邻避效应”。

                    持续开展垃圾处理设施运行管理考核和无害化等级评定工作，督促有关单位跟踪做好现有相关问题的整改落实，确保垃圾处理设施规范化运行。按照《江苏省生活垃圾填埋场重大事故应急预案》和《江苏省生活垃圾焚烧厂重大事故应急预案》的要求，分别制定相关应急预案，有效应对设施故障、事故、进场垃圾量剧增等突发事件。加强“邻避效应”研究，鼓励相关设施集中布局形成固废环保产业园，统筹解决新（改、扩）建设施选址难等问题，积极畅通公众参与渠道，接受公众监督，实施适当的供热、供电等补偿措施，有效化解“邻避效应”，努力构建“邻利型”服务设施。

                    4．进一步加强垃圾分类处理工作。

                    推动党政机关等公共机构率先实施垃圾分类，全面开展城市居民生活垃圾分类工作，把垃圾分类实施效果作为生态文明示范区、文明城市等创建考核的“硬约束”。新建住宅小区要与主体工程同步配套建设垃圾分类收集设施。加快建立与分类品种相配套的收运体系、与再生资源利用相协调的回收体系，完善与垃圾分类相衔接的终端处理设施，确保分类收运、回收、利用和处理设施相互衔接，有效解决有害垃圾分类收集、暂存、处置等环节的衔接和终端处理问题。组织开展宣传主题活动，引导市场、社会更多关注、参与垃圾分类，营造“生活垃圾分类是健康绿色生活新风尚”的舆论氛围。

                    （四）提升危险废物利用处置水平，实现安全处置。

                    1．统筹规划和加快建设集中处置设施。

                    各设区市全面调查评估危险废物处置能力与产生量匹配情况，掌握危险废物处置能力缺口的区域、种类和数量，按照“自我消纳为主、区域协同为辅”的思路，立足当前，兼顾长远，结合本地区实际制定具体实施方案，将集中处置设施纳入本区域重大环保公共基础设施进行规划布局、统筹建设，并保障正常运行。

                    各设区市应建成满足实际处置需求的危险废物集中焚烧设施和填埋场。采取焚烧处置的危险废物年产生量大于5000吨的县（市、区）或工业园区（高新区、化工园区、工业集中区等），必须配套建设集中焚烧设施，实现就近安全处置；设区市范围内必须配套建设危险废物安全填埋场并统筹使用。鼓励年产废量5000吨以上的企业自建危险废物利用、处置设施。应建设但未建成危险废物集中处置设施或处置能力严重不足的地区，由设区市统筹解决，否则一律禁止新（扩）建产生危险废物的工业项目。加快推进长江干线水上化学品洗舱站设施建设，在南京、江阴、南通等地建设5处洗舱站，总能力达到3000艘次/年，到2020年，年接收处置洗舱水能力达3万吨，洗舱水接收能力适应长江干线江苏段危化品运输以及危化品换装洗舱发展需要。

                    2．着力加强特殊类别废物安全处置。

                    以飞灰、工业污泥、废盐等库存量大、处置难的危险废物为重点，抓紧配套建设利用处置能力。加强废盐利用技术研发，有效去除有毒有害物质，提高综合利用价值。加大工业污泥减量技术示范推广力度，加快推进专业化、规范化利用处置能力建设。鼓励开展飞灰资源化利用技术的研发与应用，加快飞灰填埋场建设。着力推动产业结构优化调整，减少废盐、工业污泥等低价值、难处理废物产生量，对产生量大、无法落实处置去向的企业须实施限产、停产、关停。

                    3．大力推进现有工业窑炉协同处置。

                    各地要建立多部门协调机制，大力推进协同处置。加大正面宣传力度，加强环境监管，消除社会对协同处置过程环境安全的担忧。加大财政资金扶持，开展技术攻关和试点示范推广，按规定落实税收、金融等鼓励政策，研究建立协同处置价格政策，消除市场和制度瓶颈，鼓励依托水泥窑企业、钢铁企业的现有工业窑炉协同处置危险废物和依托火电厂协同处置工业污泥。无锡、徐州、常州、镇江等地必须建设水泥窑协同处置设施，水泥窑协同处置危险废物应满足《水泥窑协同处置固体废物污染防治技术政策》《水泥窑协同处置固体废物环境保护技术规范》等相关要求，单线设计熟料生产规模不低于4000吨/日。

                    4．不断提升处置设施规模和管理水平。

                    严格执行危险废物利用、处置标准规范，新（改、扩）建焚烧设施总设计处理能力不得低于1万吨/年，鼓励处置技术多元化发展，优先采用对废物种类适应性强的回转窑焚烧炉或其他技术更成熟、自动化水平高、运行更稳定的焚烧设施。加强技术培训交流，支持引进专业化运营管理团队，提高设施运行效率。鼓励采用国资参与、投资多元、市场化运作的建设和经营模式，积极引进国内外处置技术先进、运营管理水平高的大型企业和行业龙头企业，开展兼并重组，整合现有资源，高标准新建一批处置设施，改造一批现有处置设施，淘汰一批落后处置设施。严格限制可利用或可焚烧处置的危险废物进入填埋场，最大限度降低填埋量。

                    （五）加快污泥处理能力建设，严控二次污染。

                    1．全面提升利用处置能力。

                    加快永久性污泥处理处置设施建设。遵循区域统筹、合理布局原则，按照“减量化、稳定化、无害化和资源化”要求，加快建设工业污泥处理处置和区域性城镇污水处理厂永久性污泥处理处置设施。到2020年，新增城镇生活污泥处理处置设施能力1800吨/日（以含水率80%计）以上。规划新建的项目须同步处理泥水气。区域环境治理过程中须坚持“泥水共重”，污泥处理处置设施与臭气处理设施应同步规划，在项目实施中须同步建设、同步调试、同步投运。在污泥中的有毒有害物质含量很高，且有可供利用的工业窑炉情况下，可优先将工业窑炉协同焚烧作为污泥的阶段性处理处置方案。若污泥中有毒有害物质在较长时期内不可能无害化时，应规划建设独立的干化焚烧系统作为永久性处置方案。

                    多渠道拓展污泥综合利用和处置方式。鼓励采用综合利用方式处理处置城镇生活污水处理厂污泥。应采用永久性处置设施为主，协同处置为辅的城镇污泥处理处置设施布局方式。严格禁止采用堆肥方式处理有工业废水接入的城镇污水处理厂产生的污泥，禁止预处理不达标的工业废水进入城镇污水处理厂，降低污泥重金属等有毒有害物含量。加强污泥减量化技术、脱水技术、处理处置和综合利用技术的研发和推广应用，尽可能回收和利用污泥中的能源和资源。鼓励垃圾焚烧厂、水泥厂、燃煤电厂、有机肥厂等社会资源协同处理处置污泥，并给予上网电价或产品价格补贴，鼓励符合泥质标准的污泥与秸秆堆制有机肥。对污泥处理处置设施建设项目及其资源化产物（有机肥、沼气等）利用进行政策扶持，优先保障设施用地。

                    2．完善污泥处理处置和资源化利用技术规范标准。

                    加快制定污泥处理处置规范标准。开展污泥产量、污泥泥质、污泥处理处置及资源化利用现状调查与评价工作，加快工业污泥处置技术政策的编制工作，抓紧构建污泥处理处置技术的评价体系和方法。加快制定工业污泥处置和资源化利用的相关技术规范，严格控制污泥处置利用过程产生二次污染，确保综合利用产品环境风险可控。进一步明确城镇污泥处理处置和资源化利用的资质审批和监管流程，落实监管措施。

                    3．加强污泥全过程监管监控。

                    强化部门联动，实现联防联控。各地生态环境、住房城乡建设（水务）、交通运输、公安等部门建立协作联动机制，各单位落实联络员，通过对污泥运输船舶、车辆的检查和监控，发现和追踪违法行为。鼓励地方政府制定污泥处理处置标准和污泥产生、处理、运输、处置及资源化利用的全过程监管办法，严格约束污泥处理处置行为。督促落实污泥产生单位、污泥运输单位、污泥贮存单位、污泥处理处置单位的污染防治要求，将污泥安全处置纳入地方环保部门日常现场检查重要内容。

                    建立污泥处理处置和资源化利用信息公开制度。完善城镇污水处理厂污泥基础信息库。定期公开城镇污水处理厂污泥产量、污泥特性、污泥处理处置信息。在全省典型城市开展调研和跟踪研究，研究污泥的产量、特性、去向及其环境、经济和社会影响。

                    严格执行污泥转运和处置“联单制”。有条件的污泥运输车船安装GPS，参照省危险废物申报系统，对所有工业污泥实行系统申报和电子转移联单制度，使每一处污泥都有源可溯，强化全过程监管。执行污泥转运“联单制”，对一般工业污泥产生单位、污泥运输单位及处理处置单位进行严格监管，严格执行申报登记、转运联单和台账管理制度，规范污泥的管理、转移及处理处置。

                    （六）优化能源消费结构，提升清洁能源供应能力。

                    1．继续削减煤炭消费总量。

                    深入推进《江苏省削减煤炭消费总量专项行动实施方案》，围绕改善空气质量、倒逼产业转型、优化能源结构三大目标，持续推进燃煤锅炉整治，钢铁、化工、煤电等重点耗煤产业高质量发展，以及省内非化石能源和区外来电规模稳步扩大。按照“分类施策、明确任务”的思路，分类设定电煤和非电煤减煤目标，系统推进减煤工作，重点突出钢铁、化工、焦炭等重点耗煤行业结构性减煤。到2020年，全省煤炭消费总量比2016年减少3200万吨。

                    2．推动可再生能源增长。

                    坚持把可再生能源作为保障能源供给的重要组成、调整能源结构的重要抓手。科学发展风电，坚持海陆并举、以海为主，2020年风电装机并网规模突破1000万千瓦。坚定不移发展光伏，鼓励发展技术先进、就近消纳、平价上网的光伏发电项目，积极推进宝应、泗洪光伏“领跑者”基地建设，全力支持阜宁、沛县等地申报国家光伏领跑者基地，扩大我省光伏应用规模。积极发展生物质发电，推动生物质直燃发电、生物质气化发电、沼气直接利用等多形式利用。到2020年，非化石能源发电装机力争达到2600万千瓦，占省内电力装机的20%左右；非化石能源占一次能源消费比重达到11%。

                    3．加大天然气输储规模。

                    以天然气产供储销体系建设为重点，以提高应急调峰能力为目标，全面完善天然气产供储销体系建设，推进中俄东线江苏段、青宁线等主干管网建设，加快省沿海输气管道建设。积极推动中海油滨海LNG项目建设，抓紧推进华电赣榆、协鑫如东LNG接收站前期工作，争取开工建设。开展沿江LNG接收站布局研究，加快推进实施长江干线江苏段LNG加注码头布局方案和省内河船用LNG加气站发展专项规划。到2020年，全省天然气利用规模达到320亿立方米左右，占一次能源消费比重提高到11.5%以上。

                    4．促进能源系统提效。

                    推进园区集中供热，加大对纯凝机组和热电联产机组的技术改造力度，加快供热管网建设，充分释放和提高供热能力，优化集中供热设施布局，提高能源利用效率。2019年底前，按照热电联产规划要求，30万千瓦及以上热电联产电厂供热半径15公里范围内的燃煤锅炉和落后燃煤小热电全部关停整合，鼓励苏南地区关停整合30万千瓦及以上热电联产电厂供热半径30公里范围内的燃煤锅炉和小热电。以分布式为重点，有序推进分散式风电、分布式光伏发展，加快推进分布式能源市场化交易以及多能互补等各类国家和省级试点，促进能源供需实时互动、就近平衡、梯级利用。以降成本为目标，促进新能源产业技术进步和产品创新，尽早实现风电发电侧平价上网、光伏用户侧平价上网，积极稳妥推进售电侧改革和增量配网业务试点改革，降低终端用能成本。

                    （七）健全园区监测监控体系，提高管控能力。

                    1．建设园区自动监测站网。

                    强化对工业集聚区的监测监控，根据各园区水系及污染特征，在下游河段增设水质自动站，配备水质五参数、氨氮、总磷、总氮、挥发酚、挥发性有机物、重金属、生物毒性、流量等监测指标；对全省52个以大气污染物排放为主的省级工业园区，结合园区实际情况，按照城市环境空气VOCs自动监测站的标准，每个园区上下风向至少各建设1个园区环境空气VOCs自动监测站。到2020年，建成全省化工园区环境质量自动监测站网，形成新型污染物监督模式，动态反映环境污染状况，实现重点控制区域环境污染快速溯源。提升园区监测能力，制定年度环境监测方案。

                    2．加强污染源排放自动监控与预警。

                    完善重点排污单位污染排放自动监测与异常报警机制，提高污染物排放、在线监测设备运行和重要核设施流出物等信息追踪、捕获与报警能力以及企业排污状况智能化监控水平。

                    3．提升园区监控预警能力。

                    在园区内、园区边界、重点企业厂界、周边环境敏感目标处，全面建成园区大气预防预警监控点，逐步加强对特征污染物的自动监控，实现非甲烷总烃、恶臭等特征污染物及其他无机有毒有害气体在线监控。在周边敏感水体、污水厂总排口下游安装具有地表水常规指标、特征污染物监测指标的自动监控设施，加大省级以上工业集聚区污水集中处理和在线监控设施监管力度。园区环境基础设施安装视频监控、在线工况监控、污染物在线监测以及在线监控设施。危险废物贮存场所建设视频监控系统。

                    4．提高环境自动监测数据质量。

                    建立重点排污单位清单管理制度，自动监测数据要实现与各级监管部门联网。加强对自动监测的管理，专门用于在线监控、自动监测的仪器设备及运行管理应当符合环境保护相关标准规范要求。定期申请计量检定或校准，保证自动监测设备正常运行，自行监测原始数据全面直传并公开。建设升级完善全省统一、省市县三级共享的排污单位自动监测管理信息平台，并与环保地税信息共享平台互联互通。重点排污单位自行或委托开展污染源自动监测的手工比对，及时处理异常情况，确保监测数据完整有效。

                    5．推进园区环境信息与监控预警平台建设。

                    建立化工园区自动监控体系建设的规范和标准，指导不同类型、不同规模、不同风险级别的园区分类建设。建设全省化工园区数字化采集系统，实现化工园区监控预警系统与省环境应急指挥平台的无缝对接和数据传输。开展园区生态环境监控、排污单位生产治污排污全过程工况监控、排口污染排放监控、污水厂生物监测、固废产生储存运输处置监控、园区厂界周界周边敏感点环境监控、园区风险源监控、园区视频监控等八类监控系统建设，构建工业园区“一园一档环境信息管理平台”，2019年底前与省级“一园一档环境信息管理平台”联网，实现省、市、工业园区三级信息共享、透明管理，提升园区监控能力，实现对工业园区的一体化监管。

                    三、重点工程

                    重点推动实施生活污水处理设施建设工程、工业集聚区废水处理设施建设工程、生活垃圾收集处理设施建设工程、危险废物利用处置设施建设工程、污泥利用处置设施建设工程、工业集聚区清洁能源供应能力建设工程、工业集聚区监测监控能力建设工程等七大类工程，共1195个项目，总投资1754.23亿元。所有项目的建设，应当符合国家或省相关规划。

                    1．生活污水处理设施建设工程。

                    规划生活污水处理设施建设工程（含城镇和农村）项目共计479个，总投资950.19亿元。项目建成后，预计可以新增城镇污水处理能力519.34万吨/日、城镇污水收集管网9096.64公里，提标污水能力343.59万吨/日、改造城镇污水管网951.89公里；新增农村生活污水处理设施覆盖9069个村庄，新增农村生活污水收集管网7562.01公里、农村生活污水处理能力2.77万吨/日。

                    2．工业废水处理设施建设工程。

                    规划工业废水处理设施建设工程项目共计206个，总投资158.60亿元。项目全部建成后，预计可以新增工业废水处理能力131.56万吨/日，新增工业废水收集管网1496公里，提标工业废水处理能力68万吨/日。

                    3．生活垃圾收集处理设施建设工程。

                    规划生活垃圾收集处理设施建设工程项目共计190个，总投资380.37亿元。项目建成后可以新增生活垃圾转运能力4100吨/日、生活垃圾焚烧处理能力39700吨/日、餐厨等有机废弃物处理能力5704吨/日、建筑垃圾处理能力1714.90万吨/年。

                    4．危险废物利用处置设施建设工程。

                    规划危险废物利用处置设施建设工程项目共计77个，总投资143.51亿元。项目建成后可以新增危险废物利用处置能力289.34万吨/年、飞灰处理库容525.98万立方米。

                    5．污泥利用处置设施建设工程。

                    规划污泥利用处置设施建设工程项目共计58个，总投资43.85亿元。项目建成后可以新增城镇污泥处理能力7052吨/日、工业污泥处理能力1042吨/日。

                    6．清洁能源供应能力建设工程。

                    规划清洁能源供应能力建设工程项目共计61个，总投资56.26亿元。项目建成后可以新增供热管网151.03公里，新增供热能力4365吨/小时，新增燃气输送管线606.22公里。

                    7．工业集聚区监测监控能力建设工程。

                    规划监测监控能力建设工程项目共计124个，总投资21.45亿元，包括工业集聚区污染源在线监控设施建设工程、工业集聚区及周边环境质量自动监控站点建设工程、工业集聚区环境监控预警平台建设工程等三个类型。

                    四、保障措施

                    （一）建立统筹协调机制。

                    建立“统一监督、协调推进”的工作机制，以本方案明确的目标、任务、重点工程为引领，省打好污染防治攻坚战指挥部负责统筹监督本方案的实施，市、县（市）政府为责任主体，负责落实本方案的各项任务和项目，省生态环境、住房城乡建设、财政、发展改革、工业和信息化、水利等相关部门通力合作、精心指导、协调推进各条线工作，着力形成政府负责、指挥部统筹监督、部门各司其职、社会广泛参与的组织实施格局。同时，各级政府要把推进环境基础设施建设放在突出位置，抢抓机遇，着力推进区域内环境基础设施的完善。

                    （二）加大各类资金投入。

                    坚持“政府引导、市场运作”的原则，依法依规拓宽融资渠道。统筹安排预算资金和新增债券资金支持环境基础设施建设。对有一定收益的环境基础设施项目，探索试点发行项目收益专项债券。积极争取国家开发银行等政策性银行低息贷款，加大在环境基础设施领域推广运用政府和社会资本合作（PPP）模式力度。鼓励有条件的地方政府和社会资本联合设立绿色发展基金，并通过对社会资本适度让利等方式吸引社会资本进入。支持省生态环保发展基金在各地设立市场化子基金，鼓励地方各级政府、环保部门支持子基金投资当地环保产业项目，并积极向子基金推荐优质环保产业项目，促进省内环保产业发展。积极推动设立融资担保基金，推广股权、项目收益权、特许经营权等质押融资，采取环境绩效合同服务、授予开发经营权益等方式，引导社会资本投入。

                    （三）创新运行管理方式。

                    充分利用市场化手段，集中资金、技术和人才优势，通过投融资、技术服务、项目管理等方式推动全省环境基础设施建设，鼓励引进第三方服务机构对环境基础设施进行集中式、专业化运营维护，在保证环境基础设施高效稳定运行的同时，形成规模效益，提高人财物的利用效率。

                    突破传统监管手段，运用新一代信息技术，整合打造系统的环保信息监管平台，实现现场检查、环境数据与环保部门联网全覆盖，实时记录传输企业、园区的各类排污数据，并定期对公众公开，推进重点企业强制实行特征污染物排放数据实时公开，引导舆论监督并支持环境基础设施建设运营，形成实时监控、现场检查、舆论监督为一体的监管体系。

                  </article>
                </section>
            </div>
        );
    }
}

export default ty_newdetail;